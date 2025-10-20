from flask import Flask, jsonify
from flask_cors import CORS  # ✅ ADD THIS
import sqlite3

app = Flask(__name__)
CORS(app)  # ✅ ENABLE CORS FOR ALL ROUTES

DB_NAME = 'edinburgh_quiz.db'

def init_db():
    conn = sqlite3.connect(DB_NAME)
    c = conn.cursor()
    c.execute('''
        CREATE TABLE IF NOT EXISTS questions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            question TEXT NOT NULL,
            option_a TEXT NOT NULL,
            option_b TEXT NOT NULL,
            option_c TEXT NOT NULL,
            option_d TEXT NOT NULL,
            correct_option TEXT NOT NULL
        )
    ''')
    conn.commit()
    conn.close()

def insert_questions():
    conn = sqlite3.connect(DB_NAME)
    c = conn.cursor()
    # Check if questions already exist to avoid duplicates
    c.execute("SELECT COUNT(*) FROM questions")
    if c.fetchone()[0] > 0:
        conn.close()
        return

    questions = [
        ("What is the capital city of Scotland?", "Glasgow", "Edinburgh", "Aberdeen", "Dundee", "b"),
        ("Edinburgh Castle is located on which hill?", "Arthur’s Seat", "Calton Hill", "Castle Rock", "Corstorphine Hill", "c"),
        ("Which famous literary festival is held annually in Edinburgh?", "Hay Festival", "Edinburgh International Book Festival", "Cheltenham Literature Festival", "Bath Literature Festival", "b"),
        ("What is the name of the main shopping street in Edinburgh’s Old Town?", "Princes Street", "Royal Mile", "George Street", "Leith Walk", "b"),
        ("Which famous Edinburgh landmark is known as a dormant volcano?", "Calton Hill", "Arthur’s Seat", "Blackford Hill", "Corstorphine Hill", "b"),
        ("What year did Edinburgh become Scotland’s capital?", "1450", "1560", "1437", "1603", "c"),
        ("Which famous Edinburgh street is known for its Georgian architecture?", "Leith Walk", "Princes Street", "New Town", "Royal Mile", "c"),
        ("The Scottish Parliament building is located near which area?", "Leith", "Holyrood", "Stockbridge", "Old Town", "b"),
        ("What is the name of the annual arts festival held in Edinburgh each August?", "Edinburgh Fringe Festival", "Glastonbury", "Edinburgh Jazz Festival", "Hogmanay", "a"),
        ("Which museum in Edinburgh is dedicated to Scottish history and culture?", "National Museum of Scotland", "Scottish National Gallery", "Museum of Edinburgh", "People’s Story Museum", "a"),
        ("Which river runs through Edinburgh?", "River Clyde", "River Forth", "Water of Leith", "River Tay", "c"),
        ("What is the name of the hill that offers panoramic views of Edinburgh and is located east of the Old Town?", "Calton Hill", "Arthur’s Seat", "Blackford Hill", "Castle Rock", "a"),
        ("Which Edinburgh building was once a royal residence and now a popular tourist attraction?", "Holyrood Palace", "Balmoral Castle", "Stirling Castle", "Linlithgow Palace", "a"),
        ("Edinburgh’s Hogmanay celebrations take place on which date?", "December 24th", "January 1st", "December 31st", "January 6th", "c"),
        ("The famous Edinburgh Military Tattoo is held where?", "Holyrood Park", "Princes Street Gardens", "Edinburgh Castle Esplanade", "Calton Hill", "c"),
        ("What is the traditional Scottish dish often associated with Edinburgh?", "Haggis", "Fish and chips", "Shepherd’s pie", "Scotch broth", "a"),
        ("Which university is located in Edinburgh?", "University of Glasgow", "University of St Andrews", "University of Edinburgh", "University of Aberdeen", "c"),
        ("What famous statue stands on Calton Hill in Edinburgh?", "David Hume", "Nelson’s Monument", "Greyfriars Bobby", "Robert Burns", "b"),
        ("What is the name of the main street in Edinburgh’s New Town?", "George Street", "Princes Street", "Queen Street", "Rose Street", "a"),
        ("Which Edinburgh neighborhood is known for its cultural and artistic scene?", "Leith", "Stockbridge", "Morningside", "Newington", "a"),
    ]
    c.executemany('''
        INSERT INTO questions (question, option_a, option_b, option_c, option_d, correct_option)
        VALUES (?, ?, ?, ?, ?, ?)
    ''', questions)
    conn.commit()
    conn.close()

@app.route('/questions')
def get_questions():
    conn = sqlite3.connect(DB_NAME)
    conn.row_factory = sqlite3.Row
    c = conn.cursor()
    c.execute('SELECT id, question, option_a, option_b, option_c, option_d FROM questions')
    rows = c.fetchall()
    conn.close()

    questions = []
    for row in rows:
        questions.append({
            "id": row["id"],
            "question": row["question"],
            "options": {
                "a": row["option_a"],
                "b": row["option_b"],
                "c": row["option_c"],
                "d": row["option_d"],
            }
        })
    return jsonify(questions)

if __name__ == '__main__':
    init_db()
    insert_questions()
    app.run(debug=True)
