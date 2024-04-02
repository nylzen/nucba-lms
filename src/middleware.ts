import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  // Routes that can be accessed without authentication
  publicRoutes: ["/api/uploadthing"],
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
