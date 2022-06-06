import { Route, Routes } from "react-router-dom";
import { NotFound404Page } from "../../pages/404";
import { AboutPage } from "../../pages/AboutMe";
import { ContactPage } from "../../pages/Contact";
import { Dashboard } from "../../pages/Dashboard";
import { ProjectPage } from "../../pages/Project";
import { SingleTask } from "../../pages/SingleTask";
import { LoginSection } from "../LogInSection";

export const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<AboutPage />}>
        <Route path="auth" element={<LoginSection />} />
      </Route>
      <Route path="/project" element={<ProjectPage />} />
      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/project/:taskId" element={<SingleTask />} />

      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<NotFound404Page />} />
    </Routes>
  );
};
