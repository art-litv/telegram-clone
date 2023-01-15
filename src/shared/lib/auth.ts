import type { GetServerSideProps } from "next";

import { AUTH_REDIRECT_PATH } from "@shared/config/auth";
import { getServerAuthSession } from "@server/auth";

type SsrAuthWrapper = (fn?: GetServerSideProps) => GetServerSideProps;

const ssrAuth: SsrAuthWrapper = (fn) =>
  (async (ctx) => {
    const session = await getServerAuthSession(ctx);
    if (!session) {
      ctx.res.writeHead(302, { Location: AUTH_REDIRECT_PATH });
      ctx.res.end();
      return;
    }

    return fn ? fn(ctx) : { props: {} };
  }) as GetServerSideProps;

export default ssrAuth;
