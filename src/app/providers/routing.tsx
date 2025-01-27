import { FC, lazy, Suspense } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Preloader } from "../../shared/ui/preloader/index.ts";
const NodeTreePage = lazy(
  () => import("../../pages/node-tree-page/node-tree-page.tsx")
);

export const Routing: FC = () => {
  return (
    <Router>
      <Suspense fallback={<Preloader open={true} />}>
        <Routes>
          <Route path="*" element={<NodeTreePage />} />
        </Routes>
      </Suspense>
    </Router>
  );
};
