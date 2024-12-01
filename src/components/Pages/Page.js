import React from "react";
import PageHeader from "./PageHeader";
import PageMain from "./PageMain";
import PageFooter from "./PageFooter";
import PageSideBar from "./PageSideBar";
import { useAuth } from "context/AuthContext";

export default function Page(props) {
  const { children } = props;
  const {loading} = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <PageHeader />
      <div className="flex flex-1">
        <PageSideBar />
        <PageMain>{children}</PageMain>
      </div>
      <PageFooter />
    </div>
  );
}
