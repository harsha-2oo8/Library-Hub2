export default async function handler(req: any, res: any) {
  const { default: app } = await import("../artifacts/api-server/src/app");
  return app(req, res);
}

export const config = {
  api: {
    bodyParser: false,
  },
};
