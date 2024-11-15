from flask import Flask, render_template, request, jsonify
import math

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/calculate', methods=['POST'])
def calculate():
    expression = request.form['expression']
    try:
        # Using eval to evaluate the expression (be cautious with eval in production)
        result = eval(expression, {"__builtins__": None}, {"math": math})
    except Exception as e:
        result = 'Error: ' + str(e)
    return jsonify({'result': result})

if __name__ == '__main__':
    app.run(debug=True)
