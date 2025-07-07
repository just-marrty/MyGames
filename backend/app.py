from flask import Flask, render_template

app = Flask(__name__, static_folder="static", template_folder="templates")

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/privacy-policy")
def privacy_policy():
    return """
    <h1>Privacy Policy</h1>
    <p>This game does not collect or store any personal data. We respect your privacy.</p>
    <p>If you have any questions, contact us at: <a href="mailto:support@example.com">support@example.com</a></p>
    """

if __name__ == "__main__":
    app.run(debug=True)
