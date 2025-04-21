from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/block_response', methods=['POST'])
def block():
    data = request.json
    reason = data.get("reason", "사유 없음")
    return jsonify({
        "status": "blocked",
        "message": f"[응답 생성 불가: {reason}]"
    }), 200

if __name__ == '__main__':
    app.run(port=8000)
