export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const { reason } = req.body;
    const output = reason || "조건 위반 감지됨";

    return res.status(200).json({
      status: "blocked",
      message: `[응답 생성 불가: ${output}]`
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "서버 처리 중 오류가 발생했습니다"
    });
  }
}
