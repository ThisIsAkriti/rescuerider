import { ReactNode } from "react";

interface AuthLayoutProps {
    children: ReactNode;
  }
const AuthLayout:React.FC<AuthLayoutProps> = ({ children }) => {
    return (
        <div className="pt-10 flex justify-center items-center">
            {children}
        </div>
    )
}
export default AuthLayout;