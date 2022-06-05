import { UserServiceClient } from "questionspoke";

(async () => {
  const userClient = new UserServiceClient({
    auth: {
      getRequestHeaders: async () => ({
        authorization: "Bearer Token",
      }),
    } as any,
    fallback: "rest",
    protocol: "https",
    apiEndpoint: "question-spoke-dev.mathpresso.net",
    port: undefined,
  });
  const res = await userClient.getUser({ name: "me" });
  console.log(res);
})();
