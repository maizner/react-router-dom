import { HashRouter, Routes, Route } from "react-router-dom";
import { BlogProvider } from './BlogContext';
import { HomePage } from "./HomePage";
import { BlogPage } from "./BlogPage";
import { BlogPost } from "./BlogPost";
import { ProfilePage } from "./ProfilePage";
import { LoginPage } from "./LoginPage";
import { LogoutPage } from "./LogoutPage";
import { Menu } from "./Menu";
import { AuthProvider, AuthRoute } from "./auth";


function App() {
  return (
    <HashRouter>
      <AuthProvider>
        < Menu /> 
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={
                <BlogProvider>
                  <BlogPost />
                </BlogProvider>
              } />
              <Route path="/login" element={<LoginPage />} />
            
              <Route 
                path="/logout" 
                element={
                <AuthRoute>
                  <LogoutPage />
                </AuthRoute>
                 } 
              />

              <Route 
                path="/profile" 
                element={
                <AuthRoute>
                  <ProfilePage />
                </AuthRoute>
                 } 
              />
              <Route path="*" element={<p>Not found </p>} />
          </Routes>
        </AuthProvider>
    </HashRouter>
  );
}
export default App;
