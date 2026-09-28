const STORAGE_KEY = "sql-quest-progress-v1";
const PASS_RATIO = 0.67;

const lessons = [
  {
    id: "sql-1",
    difficulty: "Easy",
    title: "What SQL Is And Why It Matters",
    duration: "8 min",
    rewardXp: 120,
    objectives: [
      "Understand what a database, table, row, and column are.",
      "See how SQL helps you ask questions from structured data.",
      "Recognize the difference between storing data and querying it."
    ],
    notes: [
      {
        title: "SQL in plain language",
        body: "SQL stands for Structured Query Language. It is the language used to talk to relational databases. You use it to create tables, insert data, update records, and answer questions from stored information."
      },
      {
        title: "Core building blocks",
        body: "A database holds many tables. A table is like a grid. Each row is one record, and each column stores one type of value such as name, price, or date."
      },
      {
        title: "The skill you are building",
        body: "SQL is less about memorizing commands and more about thinking clearly about data. Ask: what table has the data, which columns matter, and how should the results be filtered or grouped?"
      }
    ],
    sql: "SELECT name, email\nFROM customers;",
    quiz: [
      {
        prompt: "What does SQL primarily help you do?",
        options: [
          "Design logos for websites",
          "Work with structured data in databases",
          "Edit videos",
          "Compress image files"
        ],
        answer: 1,
        explanation: "SQL is used to define, manage, and query structured data stored in relational databases."
      },
      {
        prompt: "In a table, what is a row?",
        options: [
          "A single record",
          "A database server",
          "A list of databases",
          "A type of password"
        ],
        answer: 0,
        explanation: "A row usually represents one record, such as one customer or one order."
      },
      {
        prompt: "Which statement is true?",
        options: [
          "A table contains columns and rows",
          "A database can only hold one table",
          "A column stores complete databases",
          "SQL only reads data and cannot change it"
        ],
        answer: 0,
        explanation: "Tables are made of rows and columns, and a database can contain many tables."
      }
    ]
  },
  {
    id: "sql-2",
    difficulty: "Easy",
    title: "Selecting Data With SELECT",
    duration: "10 min",
    rewardXp: 130,
    objectives: [
      "Use SELECT to choose columns from a table.",
      "Use * carefully and prefer explicit columns.",
      "Apply ORDER BY and LIMIT for cleaner results."
    ],
    notes: [
      {
        title: "The most used SQL command",
        body: "SELECT asks a database to return data. You specify which columns you want and from which table. This is the foundation for almost every read query."
      },
      {
        title: "Choose only what you need",
        body: "SELECT * returns every column, but explicit columns make queries clearer, lighter, and safer when tables change."
      },
      {
        title: "Shape the result",
        body: "ORDER BY sorts results, and LIMIT restricts how many rows you get back. These are especially useful during exploration."
      }
    ],
    sql: "SELECT id, product_name, price\nFROM products\nORDER BY price DESC\nLIMIT 5;",
    quiz: [
      {
        prompt: "What does SELECT do?",
        options: [
          "Deletes a table",
          "Returns data from a table",
          "Creates a database user",
          "Backs up the server"
        ],
        answer: 1,
        explanation: "SELECT retrieves data from one or more tables."
      },
      {
        prompt: "Why is selecting explicit columns often better than SELECT *?",
        options: [
          "It always runs 100 times faster",
          "It avoids needing a FROM clause",
          "It makes results and intent clearer",
          "It is required by all SQL engines"
        ],
        answer: 2,
        explanation: "Explicit columns improve readability and reduce unnecessary data retrieval."
      },
      {
        prompt: "Which clause sorts query results?",
        options: [
          "GROUP BY",
          "ORDER BY",
          "WHERE BY",
          "SORT"
        ],
        answer: 1,
        explanation: "ORDER BY sorts rows by one or more columns."
      }
    ]
  },
  {
    id: "sql-3",
    difficulty: "Easy",
    title: "Filtering Rows With WHERE",
    duration: "12 min",
    rewardXp: 140,
    objectives: [
      "Use WHERE to filter only relevant rows.",
      "Combine conditions with AND, OR, and NOT.",
      "Use comparison operators safely."
    ],
    notes: [
      {
        title: "Focus the result",
        body: "WHERE narrows data down so you only get rows that match your condition. Without WHERE, SQL returns all rows from the chosen table."
      },
      {
        title: "Useful operators",
        body: "Common operators include =, >, <, >=, <=, and <>. SQL also supports IN, BETWEEN, and LIKE for common filtering patterns."
      },
      {
        title: "Logical thinking",
        body: "Use AND when all conditions must be true. Use OR when any condition can be true. Use parentheses when conditions become more complex."
      }
    ],
    sql: "SELECT name, city\nFROM customers\nWHERE city = 'Berlin'\n  AND signup_year >= 2024;",
    quiz: [
      {
        prompt: "What is WHERE used for?",
        options: [
          "To rename a table",
          "To filter rows",
          "To group tables",
          "To create indexes"
        ],
        answer: 1,
        explanation: "WHERE keeps only the rows that satisfy the condition."
      },
      {
        prompt: "Which operator means 'not equal' in SQL?",
        options: [
          "<>",
          "==",
          ":=",
          "!="
        ],
        answer: 0,
        explanation: "<> is the standard SQL not-equal operator. Some systems also accept !=."
      },
      {
        prompt: "When should you use AND?",
        options: [
          "When either condition may be true",
          "When both conditions must be true",
          "When sorting text",
          "When selecting all rows"
        ],
        answer: 1,
        explanation: "AND requires every connected condition to be true."
      }
    ]
  },
  {
    id: "sql-4",
    difficulty: "Intermediate",
    title: "Aggregations And GROUP BY",
    duration: "14 min",
    rewardXp: 170,
    objectives: [
      "Use COUNT, SUM, AVG, MIN, and MAX.",
      "Group rows to produce summaries.",
      "Filter grouped results with HAVING."
    ],
    notes: [
      {
        title: "Turning raw rows into summaries",
        body: "Aggregate functions collapse many rows into useful numbers. COUNT tells you how many rows exist, SUM adds values, AVG calculates the mean, and MIN or MAX give the extremes."
      },
      {
        title: "Why GROUP BY matters",
        body: "GROUP BY creates one summary per category. For example, you can count orders per customer or average salary per department."
      },
      {
        title: "HAVING vs WHERE",
        body: "WHERE filters individual rows before grouping. HAVING filters grouped results after the aggregation has happened."
      }
    ],
    sql: "SELECT department, COUNT(*) AS employees, AVG(salary) AS avg_salary\nFROM staff\nGROUP BY department\nHAVING COUNT(*) >= 5;",
    quiz: [
      {
        prompt: "Which function counts rows?",
        options: [
          "SUM()",
          "COUNT()",
          "MAX()",
          "GROUP()"
        ],
        answer: 1,
        explanation: "COUNT() returns how many rows match."
      },
      {
        prompt: "What does GROUP BY do?",
        options: [
          "Deletes duplicate tables",
          "Sorts rows alphabetically",
          "Builds summary groups by one or more columns",
          "Prevents WHERE from working"
        ],
        answer: 2,
        explanation: "GROUP BY creates grouped buckets so aggregates can be calculated per category."
      },
      {
        prompt: "Which clause filters grouped results?",
        options: [
          "ORDER BY",
          "WHERE",
          "HAVING",
          "LIMIT"
        ],
        answer: 2,
        explanation: "HAVING applies after the grouping step."
      }
    ]
  },
  {
    id: "sql-5",
    difficulty: "Intermediate",
    title: "Joining Tables Together",
    duration: "15 min",
    rewardXp: 180,
    objectives: [
      "Understand INNER JOIN, LEFT JOIN, and join keys.",
      "Connect related tables correctly.",
      "Read joined result sets with confidence."
    ],
    notes: [
      {
        title: "Why joins exist",
        body: "Relational databases store related information in separate tables. Joins let you reconnect those pieces when you query."
      },
      {
        title: "INNER JOIN",
        body: "INNER JOIN returns rows that have matching values in both tables. It is useful when you only want complete matches."
      },
      {
        title: "LEFT JOIN",
        body: "LEFT JOIN keeps every row from the left table, even if there is no match on the right. Missing matches appear as NULL."
      }
    ],
    sql: "SELECT o.id, c.name, o.total_amount\nFROM orders AS o\nINNER JOIN customers AS c\n  ON o.customer_id = c.id;",
    quiz: [
      {
        prompt: "What is a join used for?",
        options: [
          "To merge data from related tables",
          "To delete columns",
          "To encrypt a database",
          "To change SQL syntax rules"
        ],
        answer: 0,
        explanation: "Joins bring together data from related tables using shared keys."
      },
      {
        prompt: "What does INNER JOIN return?",
        options: [
          "All rows from the left table only",
          "Rows that match in both tables",
          "All rows from both tables no matter what",
          "Only rows with NULL values"
        ],
        answer: 1,
        explanation: "INNER JOIN keeps only matching rows from each side."
      },
      {
        prompt: "What happens in a LEFT JOIN when there is no match on the right table?",
        options: [
          "The row is deleted",
          "The query fails",
          "Right-table columns become NULL",
          "The database creates a new row automatically"
        ],
        answer: 2,
        explanation: "LEFT JOIN preserves the left row and fills unmatched right-side columns with NULL."
      }
    ]
  },
  {
    id: "sql-6",
    difficulty: "Intermediate",
    title: "Subqueries And Common Table Expressions",
    duration: "17 min",
    rewardXp: 190,
    objectives: [
      "Use subqueries to break down logic.",
      "Understand when a CTE improves readability.",
      "Write layered queries without getting lost."
    ],
    notes: [
      {
        title: "Thinking in steps",
        body: "As queries become more complex, splitting the logic into smaller parts makes them easier to reason about. Subqueries and CTEs both help with this."
      },
      {
        title: "Subqueries",
        body: "A subquery is a query inside another query. It can return a single value, a row set, or a derived table."
      },
      {
        title: "CTEs",
        body: "A Common Table Expression starts with WITH. It gives a temporary name to an intermediate result and often makes advanced logic much clearer."
      }
    ],
    sql: "WITH top_customers AS (\n  SELECT customer_id, SUM(total_amount) AS total_spend\n  FROM orders\n  GROUP BY customer_id\n)\nSELECT customer_id, total_spend\nFROM top_customers\nWHERE total_spend > 5000;",
    quiz: [
      {
        prompt: "What is a subquery?",
        options: [
          "A type of index",
          "A query inside another query",
          "A backup script",
          "A database user"
        ],
        answer: 1,
        explanation: "A subquery is nested inside another query."
      },
      {
        prompt: "What keyword starts a Common Table Expression?",
        options: [
          "TABLE",
          "TEMP",
          "WITH",
          "CTE"
        ],
        answer: 2,
        explanation: "CTEs begin with WITH."
      },
      {
        prompt: "Why might you choose a CTE?",
        options: [
          "It always stores data permanently",
          "It can make complex logic easier to read",
          "It replaces SELECT completely",
          "It disables GROUP BY"
        ],
        answer: 1,
        explanation: "CTEs are often chosen for readability and maintainability."
      }
    ]
  },
  {
    id: "sql-7",
    difficulty: "Advanced",
    title: "Window Functions For Analytics",
    duration: "18 min",
    rewardXp: 220,
    objectives: [
      "Understand OVER(), PARTITION BY, and ORDER BY inside windows.",
      "Use ROW_NUMBER, RANK, and running totals.",
      "Compare window functions to GROUP BY."
    ],
    notes: [
      {
        title: "Why window functions feel powerful",
        body: "Window functions calculate values across related rows without collapsing them into a single summary row. That means you keep detail while adding analytics."
      },
      {
        title: "How the window works",
        body: "OVER defines the analysis window. PARTITION BY splits rows into groups, and ORDER BY defines sequence inside each partition."
      },
      {
        title: "Common use cases",
        body: "You can rank salespeople, find top rows per category, calculate running totals, or compare each row to a group average."
      }
    ],
    sql: "SELECT employee_id, department, salary,\n  RANK() OVER (PARTITION BY department ORDER BY salary DESC) AS dept_rank\nFROM staff;",
    quiz: [
      {
        prompt: "What makes a window function different from GROUP BY?",
        options: [
          "It keeps individual rows while adding calculated values",
          "It can only work on text fields",
          "It permanently changes table data",
          "It removes the need for SELECT"
        ],
        answer: 0,
        explanation: "Window functions preserve row-level detail while adding analytic calculations."
      },
      {
        prompt: "Which clause can divide a window into groups?",
        options: [
          "HAVING",
          "PARTITION BY",
          "LIMIT",
          "UNION"
        ],
        answer: 1,
        explanation: "PARTITION BY breaks the window into separate groups."
      },
      {
        prompt: "Which function can assign a ranking to rows?",
        options: [
          "RANK()",
          "DROP()",
          "ALTER()",
          "GROUP()"
        ],
        answer: 0,
        explanation: "RANK() is a standard window function for ordered ranking."
      }
    ]
  },
  {
    id: "sql-8",
    difficulty: "Advanced",
    title: "Indexes And Query Performance",
    duration: "20 min",
    rewardXp: 230,
    objectives: [
      "Understand what indexes do and why they matter.",
      "Recognize trade-offs between read speed and write cost.",
      "Use execution-plan thinking at a high level."
    ],
    notes: [
      {
        title: "What an index does",
        body: "An index is a supporting data structure that helps the database locate rows faster. Without an index, the engine may need to scan many rows."
      },
      {
        title: "The trade-off",
        body: "Indexes can speed up reads, but they take storage and can slow inserts, updates, and deletes because the index also has to be maintained."
      },
      {
        title: "Think like the database",
        body: "A useful performance habit is asking how many rows the engine must touch. Indexing filter columns, join keys, and sort columns can reduce expensive work."
      }
    ],
    sql: "CREATE INDEX idx_orders_customer_date\nON orders (customer_id, order_date);",
    quiz: [
      {
        prompt: "Why do indexes exist?",
        options: [
          "To color-code query results",
          "To help the database find rows faster",
          "To replace tables",
          "To make backups smaller"
        ],
        answer: 1,
        explanation: "Indexes are mainly about faster lookup and access paths."
      },
      {
        prompt: "What is a common cost of adding many indexes?",
        options: [
          "INSERT and UPDATE operations may become slower",
          "SELECT stops working",
          "Joins are no longer allowed",
          "Rows cannot contain numbers"
        ],
        answer: 0,
        explanation: "Write operations can slow down because indexes must also be updated."
      },
      {
        prompt: "Which columns are often good index candidates?",
        options: [
          "Columns used in filters and joins",
          "Only columns that are always NULL",
          "Columns that are never queried",
          "Only columns with very long text"
        ],
        answer: 0,
        explanation: "Columns commonly used in WHERE, JOIN, and ORDER BY can benefit from indexing."
      }
    ]
  },
  {
    id: "sql-9",
    difficulty: "Advanced",
    title: "Designing Reliable SQL Solutions",
    duration: "22 min",
    rewardXp: 250,
    objectives: [
      "Combine correctness, readability, and performance.",
      "Think through edge cases such as NULLs and duplicates.",
      "Adopt habits used by strong SQL practitioners."
    ],
    notes: [
      {
        title: "Expert SQL is thoughtful SQL",
        body: "At an advanced level, good SQL means more than writing a query that runs. It means the logic is correct, the query is understandable, and the result is trustworthy."
      },
      {
        title: "Reliability habits",
        body: "Check assumptions about null values, duplicate rows after joins, and whether filters belong before or after aggregation. Small mistakes here often create silent data issues."
      },
      {
        title: "Professional workflow",
        body: "Strong analysts validate row counts, inspect samples, test edge cases, and refine performance only after ensuring correctness. Clear aliases and stepwise query structure pay off."
      }
    ],
    sql: "WITH customer_order_totals AS (\n  SELECT c.id, c.name, COALESCE(SUM(o.total_amount), 0) AS total_spend\n  FROM customers c\n  LEFT JOIN orders o ON c.id = o.customer_id\n  GROUP BY c.id, c.name\n)\nSELECT *\nFROM customer_order_totals\nORDER BY total_spend DESC;",
    quiz: [
      {
        prompt: "What is a common source of silent SQL bugs?",
        options: [
          "Checking row counts",
          "Thinking about NULL values and duplicates",
          "Using clear aliases",
          "Reviewing sample outputs"
        ],
        answer: 1,
        explanation: "NULL handling and duplicate rows from joins often create subtle logic bugs."
      },
      {
        prompt: "Which habit supports trustworthy SQL work?",
        options: [
          "Skipping validation if the query runs",
          "Only optimizing before checking correctness",
          "Inspecting counts and samples to validate logic",
          "Avoiding aliases entirely"
        ],
        answer: 2,
        explanation: "Validation is a core habit for reliable SQL results."
      },
      {
        prompt: "What does COALESCE help with?",
        options: [
          "Ranking departments by salary",
          "Replacing NULL with a fallback value",
          "Creating indexes automatically",
          "Deleting duplicate rows"
        ],
        answer: 1,
        explanation: "COALESCE returns the first non-NULL value from its arguments."
      }
    ]
  }
];

const achievements = [
  {
    id: "first-review",
    title: "Warm-Up Win",
    description: "Review your first lesson.",
    isUnlocked: (state) => state.reviewedLessons.length >= 1
  },
  {
    id: "first-pass",
    title: "Quiz Crusher",
    description: "Pass your first lesson test.",
    isUnlocked: (state) => state.completedLessons.length >= 1
  },
  {
    id: "beginner-track",
    title: "Beginner Cleared",
    description: "Finish every easy lesson.",
    isUnlocked: (state) => completeDifficulty(state, "Easy")
  },
  {
    id: "intermediate-track",
    title: "Intermediate Momentum",
    description: "Finish every intermediate lesson.",
    isUnlocked: (state) => completeDifficulty(state, "Intermediate")
  },
  {
    id: "advanced-track",
    title: "Advanced Finisher",
    description: "Finish every advanced lesson.",
    isUnlocked: (state) => completeDifficulty(state, "Advanced")
  },
  {
    id: "xp-master",
    title: "XP Machine",
    description: "Reach 1000 XP.",
    isUnlocked: (state) => state.xp >= 1000
  }
];

const initialState = {
  currentLessonId: lessons[0].id,
  reviewedLessons: [],
  completedLessons: [],
  awardedReviewXp: [],
  awardedQuizXp: [],
  quizResults: {},
  badges: [],
  xp: 0,
  level: 1,
  streak: 0,
  lastActionDay: null
};

const state = loadState();

const elements = {
  lessonGroups: document.getElementById("lesson-groups"),
  lessonsCompleteCopy: document.getElementById("lessons-complete-copy"),
  courseProgressCopy: document.getElementById("course-progress-copy"),
  courseProgressBar: document.getElementById("course-progress-bar"),
  playerLevel: document.getElementById("player-level"),
  playerXp: document.getElementById("player-xp"),
  playerStreak: document.getElementById("player-streak"),
  playerBadges: document.getElementById("player-badges"),
  heroTitle: document.getElementById("hero-title"),
  heroDescription: document.getElementById("hero-description"),
  continueButton: document.getElementById("continue-button"),
  lessonDifficulty: document.getElementById("lesson-difficulty"),
  lessonTitle: document.getElementById("lesson-title"),
  lessonStatus: document.getElementById("lesson-status"),
  lessonDuration: document.getElementById("lesson-duration"),
  lessonReward: document.getElementById("lesson-reward"),
  lessonGoal: document.getElementById("lesson-goal"),
  lessonObjectives: document.getElementById("lesson-objectives"),
  lessonContent: document.getElementById("lesson-content"),
  lessonSql: document.getElementById("lesson-sql"),
  quizForm: document.getElementById("quiz-form"),
  quizQuestions: document.getElementById("quiz-questions"),
  quizResult: document.getElementById("quiz-result"),
  quizScorePill: document.getElementById("quiz-score-pill"),
  markReviewed: document.getElementById("mark-reviewed"),
  rewardToast: document.getElementById("reward-toast"),
  sparkLayer: document.getElementById("spark-layer"),
  achievementList: document.getElementById("achievement-list"),
  resetProgress: document.getElementById("reset-progress")
};

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!saved) {
      return { ...initialState };
    }
    return normalizeState(saved);
  } catch (error) {
    return { ...initialState };
  }
}

function normalizeState(saved) {
  return {
    ...initialState,
    ...saved,
    reviewedLessons: Array.isArray(saved.reviewedLessons) ? saved.reviewedLessons : [],
    completedLessons: Array.isArray(saved.completedLessons) ? saved.completedLessons : [],
    awardedReviewXp: Array.isArray(saved.awardedReviewXp) ? saved.awardedReviewXp : [],
    awardedQuizXp: Array.isArray(saved.awardedQuizXp) ? saved.awardedQuizXp : [],
    badges: Array.isArray(saved.badges) ? saved.badges : [],
    quizResults: typeof saved.quizResults === "object" && saved.quizResults ? saved.quizResults : {}
  };
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function getLessonById(lessonId) {
  return lessons.find((lesson) => lesson.id === lessonId) || lessons[0];
}

function getCurrentLesson() {
  return getLessonById(state.currentLessonId);
}

function getProgressPercent() {
  return Math.round((state.completedLessons.length / lessons.length) * 100);
}

function getLessonStatus(lessonId) {
  if (state.completedLessons.includes(lessonId)) {
    return "Mastered";
  }
  if (state.reviewedLessons.includes(lessonId)) {
    return "In Progress";
  }
  return "Not Started";
}

function completeDifficulty(currentState, difficulty) {
  const matching = lessons.filter((lesson) => lesson.difficulty === difficulty);
  return matching.every((lesson) => currentState.completedLessons.includes(lesson.id));
}

function renderLessonGroups() {
  const difficulties = ["Easy", "Intermediate", "Advanced"];
  elements.lessonGroups.innerHTML = "";

  difficulties.forEach((difficulty) => {
    const group = document.createElement("section");
    group.className = "lesson-group";

    const title = document.createElement("div");
    title.className = "lesson-group-title";
    const total = lessons.filter((lesson) => lesson.difficulty === difficulty).length;
    const done = lessons.filter((lesson) =>
      lesson.difficulty === difficulty && state.completedLessons.includes(lesson.id)
    ).length;
    title.innerHTML = `<span>${difficulty}</span><span>${done}/${total}</span>`;

    group.appendChild(title);

    lessons
      .filter((lesson) => lesson.difficulty === difficulty)
      .forEach((lesson, index) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "lesson-nav-button";

        if (lesson.id === state.currentLessonId) {
          button.classList.add("active");
        }
        if (state.completedLessons.includes(lesson.id)) {
          button.classList.add("completed");
        }

        button.addEventListener("click", () => {
          state.currentLessonId = lesson.id;
          saveState();
          render();
        });

        const titleRow = document.createElement("div");
        titleRow.className = "lesson-nav-title";
        const strong = document.createElement("strong");
        strong.textContent = `${index + 1}. ${lesson.title}`;
        const status = document.createElement("span");
        status.textContent = getLessonStatus(lesson.id);
        titleRow.append(strong, status);

        const metaRow = document.createElement("div");
        metaRow.className = "lesson-nav-meta";
        metaRow.innerHTML = `<span>${lesson.duration}</span><span>+${lesson.rewardXp} XP</span>`;

        button.append(titleRow, metaRow);
        group.appendChild(button);
      });

    elements.lessonGroups.appendChild(group);
  });
}

function renderCurrentLesson() {
  const lesson = getCurrentLesson();
  const quizResult = state.quizResults[lesson.id];

  elements.lessonDifficulty.textContent = lesson.difficulty;
  elements.lessonTitle.textContent = lesson.title;
  elements.lessonStatus.textContent = getLessonStatus(lesson.id);
  elements.lessonDuration.textContent = lesson.duration;
  elements.lessonReward.textContent = `+${lesson.rewardXp} XP`;
  elements.lessonGoal.textContent = `${lesson.quiz.length} quiz questions`;
  elements.lessonSql.textContent = lesson.sql;

  elements.lessonObjectives.innerHTML = "";
  lesson.objectives.forEach((objective) => {
    const item = document.createElement("li");
    item.textContent = objective;
    elements.lessonObjectives.appendChild(item);
  });

  elements.lessonContent.innerHTML = "";
  lesson.notes.forEach((note) => {
    const wrap = document.createElement("div");
    wrap.className = "lesson-note";
    const title = document.createElement("strong");
    title.textContent = note.title;
    const body = document.createElement("p");
    body.textContent = note.body;
    wrap.append(title, body);
    elements.lessonContent.appendChild(wrap);
  });

  renderQuiz(lesson, quizResult);
}

function renderQuiz(lesson, previousResult) {
  elements.quizQuestions.innerHTML = "";

  lesson.quiz.forEach((question, questionIndex) => {
    const wrapper = document.createElement("section");
    wrapper.className = "quiz-question";

    const title = document.createElement("h3");
    title.textContent = `${questionIndex + 1}. ${question.prompt}`;
    wrapper.appendChild(title);

    const options = document.createElement("div");
    options.className = "quiz-options";

    question.options.forEach((optionText, optionIndex) => {
      const label = document.createElement("label");
      label.className = "quiz-option";

      const input = document.createElement("input");
      input.type = "radio";
      input.name = `question-${questionIndex}`;
      input.value = String(optionIndex);

      if (previousResult?.answers?.[questionIndex] === optionIndex) {
        input.checked = true;
      }

      const span = document.createElement("span");
      span.textContent = optionText;
      label.append(input, span);
      options.appendChild(label);
    });

    wrapper.appendChild(options);
    elements.quizQuestions.appendChild(wrapper);
  });

  if (previousResult) {
    const percent = Math.round((previousResult.score / lesson.quiz.length) * 100);
    elements.quizScorePill.textContent = `${percent}% last score`;
    elements.quizScorePill.classList.remove("faint");
    showQuizResult(previousResult, lesson);
  } else {
    elements.quizScorePill.textContent = "Ready";
    elements.quizScorePill.classList.add("faint");
    elements.quizResult.className = "quiz-result hidden";
    elements.quizResult.innerHTML = "";
  }
}

function renderStats() {
  const progressPercent = getProgressPercent();
  elements.lessonsCompleteCopy.textContent = `${state.completedLessons.length}/${lessons.length} done`;
  elements.courseProgressCopy.textContent = `${progressPercent}%`;
  elements.courseProgressBar.style.width = `${progressPercent}%`;
  elements.playerLevel.textContent = String(state.level);
  elements.playerXp.textContent = String(state.xp);
  elements.playerStreak.textContent = `${state.streak} day`;
  elements.playerBadges.textContent = String(state.badges.length);

  const nextLesson = getNextLesson();
  if (nextLesson) {
    elements.heroTitle.textContent = `Next Up: ${nextLesson.title}`;
    elements.heroDescription.textContent = `Keep your streak alive and earn +${nextLesson.rewardXp} XP by completing the next SQL checkpoint.`;
    elements.continueButton.textContent = "Jump To Next Lesson";
  } else {
    elements.heroTitle.textContent = "You Finished SQL Quest";
    elements.heroDescription.textContent = "Every lesson is complete. Revisit anything, improve quiz scores, and keep the habit going.";
    elements.continueButton.textContent = "Review Mastered Lessons";
  }
}

function renderAchievements() {
  unlockAchievements();
  elements.achievementList.innerHTML = "";

  achievements.forEach((achievement) => {
    const unlocked = state.badges.includes(achievement.id);
    const card = document.createElement("div");
    card.className = `achievement-card ${unlocked ? "unlocked" : ""}`;

    const title = document.createElement("strong");
    title.textContent = `${unlocked ? "Unlocked" : "Locked"}: ${achievement.title}`;

    const body = document.createElement("p");
    body.className = "muted";
    body.textContent = achievement.description;

    card.append(title, body);
    elements.achievementList.appendChild(card);
  });
}

function render() {
  renderLessonGroups();
  renderCurrentLesson();
  renderStats();
  renderAchievements();
}

function getTodayKey() {
  return new Date().toISOString().slice(0, 10);
}

function updateStreak() {
  const todayKey = getTodayKey();
  if (state.lastActionDay === todayKey) {
    return false;
  }

  if (!state.lastActionDay) {
    state.streak = 1;
  } else {
    const lastDate = new Date(`${state.lastActionDay}T00:00:00`);
    const currentDate = new Date(`${todayKey}T00:00:00`);
    const diffDays = Math.round((currentDate - lastDate) / 86400000);
    state.streak = diffDays === 1 ? state.streak + 1 : 1;
  }

  state.lastActionDay = todayKey;
  return true;
}

function updateLevel() {
  state.level = Math.max(1, Math.floor(state.xp / 250) + 1);
}

function rewardXp(amount, sourceCopy) {
  const previousLevel = state.level;
  updateStreak();
  state.xp += amount;
  updateLevel();
  saveState();

  const leveledUp = state.level > previousLevel;
  const toastLines = [`+${amount} XP`, sourceCopy];
  if (leveledUp) {
    toastLines.push(`Level up! You reached level ${state.level}.`);
  }
  if (state.streak > 1) {
    toastLines.push(`Streak alive: ${state.streak} days.`);
  }

  showRewardToast(toastLines.join(" "));
  emitSparks();
}

function unlockAchievements() {
  achievements.forEach((achievement) => {
    if (!state.badges.includes(achievement.id) && achievement.isUnlocked(state)) {
      state.badges.push(achievement.id);
      showRewardToast(`Badge unlocked: ${achievement.title}`);
      emitSparks();
    }
  });
  saveState();
}

function showRewardToast(message) {
  elements.rewardToast.textContent = message;
  elements.rewardToast.className = "reward-toast show";
  clearTimeout(showRewardToast.timer);
  showRewardToast.timer = setTimeout(() => {
    elements.rewardToast.className = "reward-toast hidden";
  }, 2300);
}

function emitSparks() {
  elements.sparkLayer.innerHTML = "";
  const colors = ["#7c5cff", "#21d4c7", "#ffb648", "#36d98a", "#eef4ff"];

  for (let index = 0; index < 24; index += 1) {
    const spark = document.createElement("span");
    spark.className = "spark";
    spark.style.left = `${50 + (Math.random() * 14 - 7)}%`;
    spark.style.top = `${55 + (Math.random() * 12 - 6)}%`;
    spark.style.background = colors[index % colors.length];
    spark.style.setProperty("--x", `${Math.random() * 180 - 90}px`);
    spark.style.setProperty("--y", `${Math.random() * -180 + 90}px`);
    spark.style.animationDelay = `${Math.random() * 120}ms`;
    elements.sparkLayer.appendChild(spark);
  }

  clearTimeout(emitSparks.timer);
  emitSparks.timer = setTimeout(() => {
    elements.sparkLayer.innerHTML = "";
  }, 1000);
}

function markLessonReviewed() {
  const lesson = getCurrentLesson();
  if (!state.reviewedLessons.includes(lesson.id)) {
    state.reviewedLessons.push(lesson.id);
  }

  if (!state.awardedReviewXp.includes(lesson.id)) {
    state.awardedReviewXp.push(lesson.id);
    rewardXp(40, `Lesson reviewed: ${lesson.title}`);
  } else {
    saveState();
    showRewardToast("Lesson already reviewed. Progress saved.");
  }

  render();
}

function getSelectedAnswers() {
  const lesson = getCurrentLesson();
  return lesson.quiz.map((_, index) => {
    const checked = document.querySelector(`input[name="question-${index}"]:checked`);
    return checked ? Number(checked.value) : null;
  });
}

function submitQuiz(event) {
  event.preventDefault();
  const lesson = getCurrentLesson();
  const answers = getSelectedAnswers();

  if (answers.some((answer) => answer === null)) {
    showRewardToast("Answer every question before submitting the quiz.");
    return;
  }

  let score = 0;
  const details = lesson.quiz.map((question, index) => {
    const correct = answers[index] === question.answer;
    if (correct) {
      score += 1;
    }
    return {
      prompt: question.prompt,
      correct,
      explanation: question.explanation,
      correctOption: question.options[question.answer],
      selectedOption: question.options[answers[index]]
    };
  });

  const passed = score / lesson.quiz.length >= PASS_RATIO;
  state.quizResults[lesson.id] = { score, answers, passed, details };

  if (!state.reviewedLessons.includes(lesson.id)) {
    state.reviewedLessons.push(lesson.id);
  }

  if (passed && !state.completedLessons.includes(lesson.id)) {
    state.completedLessons.push(lesson.id);
  }

  if (passed && !state.awardedQuizXp.includes(lesson.id)) {
    state.awardedQuizXp.push(lesson.id);
    rewardXp(lesson.rewardXp, `Quiz cleared: ${lesson.title}`);
  } else {
    saveState();
    showRewardToast(passed ? "Quiz already cleared. Score saved." : "Nice attempt. Review the lesson and try again.");
  }

  render();
}

function showQuizResult(result, lesson) {
  const percent = Math.round((result.score / lesson.quiz.length) * 100);
  elements.quizResult.className = `quiz-result ${result.passed ? "success" : "retry"}`;

  const summary = document.createElement("p");
  summary.innerHTML = `<strong>Score:</strong> ${result.score}/${lesson.quiz.length} (${percent}%)`;
  elements.quizResult.innerHTML = "";
  elements.quizResult.appendChild(summary);

  result.details.forEach((detail) => {
    const item = document.createElement("p");
    item.className = "muted";
    item.textContent = `${detail.correct ? "Correct" : "Review"} - ${detail.prompt} Selected: ${detail.selectedOption}. Right answer: ${detail.correctOption}. ${detail.explanation}`;
    elements.quizResult.appendChild(item);
  });
}

function getNextLesson() {
  return lessons.find((lesson) => !state.completedLessons.includes(lesson.id)) || null;
}

function continueLearning() {
  const nextLesson = getNextLesson() || lessons[0];
  state.currentLessonId = nextLesson.id;
  saveState();
  render();
}

function resetProgress() {
  const confirmed = window.confirm("Reset all saved SQL Quest progress?");
  if (!confirmed) {
    return;
  }

  Object.assign(state, { ...initialState });
  saveState();
  showRewardToast("Progress reset. Fresh run started.");
  render();
}

elements.quizForm.addEventListener("submit", submitQuiz);
elements.markReviewed.addEventListener("click", markLessonReviewed);
elements.continueButton.addEventListener("click", continueLearning);
elements.resetProgress.addEventListener("click", resetProgress);

render();
