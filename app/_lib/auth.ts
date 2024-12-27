import NextAuth, { Session, User } from "next-auth";
import Google from "next-auth/providers/google";
import { createGuest, getGuest } from "./data-service";

const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    authorized({ auth }: { auth: Session | null }) {
      return !!auth?.user;
    },
    async signIn({ user }: { user: User }) {
      try {
        if (!user.email || !user.name) return false;
        const existingGuest = await getGuest(user.email);

        if (!existingGuest)
          await createGuest({ email: user.email, fullName: user.name });

        return true;
      } catch {
        return false;
      }
    },
    async session({ session }: { session: Session }) {
      if (!session?.user?.email) return session;
      const guest = await getGuest(session?.user?.email);

      session.user.id = guest.id;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth(authConfig);
