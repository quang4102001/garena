import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { publicRoutes } from '~/routes';
import { MainLayout } from '~/Layout';
import { Fragment } from 'react';

function App() {
    return (
        <Router>
            <div className="root">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        let Layout = MainLayout;
                        if (route.layout) {
                            Layout = route.layout;

                            if (route.layout === null) {
                                Layout = <Fragment />;
                            }
                        }
                        const Page = route.components;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
