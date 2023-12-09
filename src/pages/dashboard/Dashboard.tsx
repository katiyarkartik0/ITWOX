import { ReactNode, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { getPosts } from "api/Posts";

import Card from "components/Card/Card";
import Pagination from "components/Pagination/Pagination";
import UnauthorizedPage from "pages/unauthorizedPage/UnauthorizedPage";

import { selectUserData } from "helpers/selector";

import "./Dashboard.css";
import { Loader } from "utils/Loader/Loader";

const resultsPerPage = 10;

const Dashboard: React.FC = () => {
  const [posts, setPosts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get("currentPage") || "1");
  const [visiblePosts, setVisiblePosts] = useState<ReactNode>([]);
  const [isLoading, setIsLoading] = useState(false);

  const { email } =
    useSelector(selectUserData) ||
    JSON.parse(localStorage.getItem("userData") || "{}");

  const isSignedIn = !!email;

  //validating page numbers
  if (currentPage < 1) {
    searchParams.set("currentPage", "1");
    setSearchParams(searchParams);
  }
  if (currentPage > 10) {
    searchParams.set("currentPage", "10");
    setSearchParams(searchParams);
  }

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      const response = await getPosts();
      const data = await response.json();
      setIsLoading(false);
      setPosts(data);
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    const normalizedPageCount = currentPage - 1;
    if (posts.length > 0) {
      const results = [];
      for (
        let currCount = normalizedPageCount * resultsPerPage;
        currCount < normalizedPageCount * resultsPerPage + resultsPerPage;
        currCount++
      ) {
        const { id, title, body, userId } = posts[currCount];

        results.push(
          <Card userId={userId} id={id} title={title} body={body} />
        );
      }
      setVisiblePosts(results);
    }
  }, [posts, currentPage]);

  const onPreviousClick = () => {
    searchParams.set("currentPage", `${currentPage - 1}`);
    setSearchParams(searchParams);
  };

  const onNextClick = () => {
    searchParams.set("currentPage", `${currentPage + 1}`);
    setSearchParams(searchParams);
  };

  const isPreviousButtonDisabled = currentPage < 2;
  const isNextButtonDisabled = currentPage > 9;

  if (!isSignedIn) {
    return (
      <UnauthorizedPage path="/" displayMessage="Please sign in to continue to dashboard!" />
    );
  }

  return (
    <div className="dashboardPage">
    <h1 data-testid="dashboard-title">Dashboard</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="postsContainer">{visiblePosts}</div>
          <Pagination
            isPreviousButtonDisabled={isPreviousButtonDisabled}
            isNextButtonDisabled={isNextButtonDisabled}
            currentPage={currentPage}
            onNextClick={onNextClick}
            onPreviousClick={onPreviousClick}
          />
        </>
      )}
    </div>
  );
};

export default Dashboard;
