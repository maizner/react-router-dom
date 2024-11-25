import { HashRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./HomePage";
import { BlogPage } from "./BlogPage";
import { BlogPost } from "./BlogPost";
import { ProfilePage } from "./ProfilePage";
import { LoginPage } from "./LoginPage";
import { LogoutPage } from "./LogoutPage";
import { Menu } from "./Menu";
import { AuthProvider, ProtectedPath } from "./auth";


function App() {
  return (
    <HashRouter>
      <AuthProvider>
        < Menu /> 
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/login" element={<LoginPage />} />
            
              <Route 
                path="/logout" 
                element={
                <ProtectedPath>
                  <LogoutPage />
                </ProtectedPath>
                 } 
              />

              <Route 
                path="/profile" 
                element={
                <ProtectedPath>
                  <ProfilePage />
                </ProtectedPath>
                 } 
              />
              <Route path="*" element={<p>Not found </p>} />
          </Routes>
        </AuthProvider>
    </HashRouter>
  );
}
export default App;
