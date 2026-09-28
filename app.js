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
    output: {
      columns: ["name", "email"],
      rows: [
        ["Alice Schmidt", "alice@example.de"],
        ["David Kim", "david.k@example.com"],
        ["Elena Rostova", "elena@techmail.org"],
        ["Marcus Vance", "m.vance@worknet.io"]
      ]
    },
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
        explanation: "A row represents one distinct record, such as an individual customer or order."
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
        explanation: "Tables consist of rows and columns, and a single database can house hundreds of tables."
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
    output: {
      columns: ["id", "product_name", "price"],
      rows: [
        [104, "UltraWide 4K Monitor", "$899.00"],
        [218, "Mechanical Keyboard", "$210.00"],
        [305, "Noise-Canceling Headset", "$185.00"],
        [112, "Vertical Ergonomic Mouse", "$79.99"],
        [401, "Thunderbolt 4 Dock", "$64.50"]
      ]
    },
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
        explanation: "Explicit column selection improves network bandwidth, query clarity, and application stability."
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
        explanation: "ORDER BY sorts rows by one or more columns ascending (ASC) or descending (DESC)."
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
    output: {
      columns: ["name", "city"],
      rows: [
        ["Sophia Weber", "Berlin"],
        ["Maximilian Braun", "Berlin"],
        ["Lukas Wagner", "Berlin"]
      ]
    },
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
        explanation: "WHERE keeps only the rows that satisfy the specified condition."
      },
      {
        prompt: "Which operator means 'not equal' in standard SQL?",
        options: [
          "<>",
          "==",
          ":=",
          "!!"
        ],
        answer: 0,
        explanation: "<> is the ISO standard SQL not-equal operator (!= is also widely accepted)."
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
        explanation: "AND requires that every connected condition evaluates to TRUE."
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
    output: {
      columns: ["department", "employees", "avg_salary"],
      rows: [
        ["Engineering", 12, "$114,500"],
        ["Product", 7, "$98,200"],
        ["Sales", 9, "$84,100"]
      ]
    },
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
        explanation: "COUNT() returns the total number of matching rows."
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
        explanation: "GROUP BY partitions rows into summary buckets so aggregates run per distinct category."
      },
      {
        prompt: "Which clause filters aggregated/grouped results?",
        options: [
          "ORDER BY",
          "WHERE",
          "HAVING",
          "LIMIT"
        ],
        answer: 2,
        explanation: "HAVING filters data after grouping and aggregate calculations take place."
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
    output: {
      columns: ["id", "name", "total_amount"],
      rows: [
        [1001, "Alice Schmidt", "$349.50"],
        [1002, "David Kim", "$1,220.00"],
        [1003, "Alice Schmidt", "$85.00"],
        [1004, "Elena Rostova", "$590.20"]
      ]
    },
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
        explanation: "Joins correlate data across separate tables using common relational keys."
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
        explanation: "INNER JOIN keeps only rows where the join predicate finds a match in both tables."
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
        explanation: "LEFT JOIN preserves the left record and fills any missing right-side attributes with NULL."
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
    output: {
      columns: ["customer_id", "total_spend"],
      rows: [
        [42, "$8,420.00"],
        [109, "$6,150.00"],
        [254, "$5,890.50"]
      ]
    },
    quiz: [
      {
        prompt: "What is a subquery?",
        options: [
          "A type of index",
          "A query nested inside another query",
          "A backup script",
          "A database user"
        ],
        answer: 1,
        explanation: "A subquery is any query written inside another surrounding SQL statement."
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
        explanation: "CTEs are defined starting with the WITH keyword."
      },
      {
        prompt: "Why might you choose a CTE?",
        options: [
          "It always stores data permanently",
          "It can make complex nested logic readable and clean",
          "It replaces SELECT completely",
          "It disables GROUP BY"
        ],
        answer: 1,
        explanation: "CTEs clarify multi-step queries by breaking them into named, logical building blocks."
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
    output: {
      columns: ["employee_id", "department", "salary", "dept_rank"],
      rows: [
        [14, "Engineering", "$135,000", 1],
        [8, "Engineering", "$128,000", 2],
        [22, "Engineering", "$115,000", 3],
        [31, "Sales", "$98,000", 1],
        [19, "Sales", "$92,000", 2]
      ]
    },
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
        explanation: "Window functions retain original row granularity while computing running or grouped calculations."
      },
      {
        prompt: "Which clause can divide a window into subgroups?",
        options: [
          "HAVING",
          "PARTITION BY",
          "LIMIT",
          "UNION"
        ],
        answer: 1,
        explanation: "PARTITION BY segregates the row window into distinct subgroups for calculations."
      },
      {
        prompt: "Which function can assign an ordered ranking to rows?",
        options: [
          "RANK()",
          "DROP()",
          "ALTER()",
          "GROUP()"
        ],
        answer: 0,
        explanation: "RANK() calculates rank based on the ORDER BY sequence in the window specification."
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
    output: {
      columns: ["command", "target_table", "indexed_columns", "status"],
      rows: [
        ["CREATE INDEX", "orders", "customer_id, order_date", "SUCCESS (B-Tree generated)"]
      ]
    },
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
        explanation: "Indexes speed up lookups by providing direct pointers rather than scanning entire tables."
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
        explanation: "Write operations cost more because each insert/update must also update index trees."
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
        explanation: "Columns frequently used in WHERE conditions, JOIN clauses, and ORDER BY benefit most."
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
    output: {
      columns: ["id", "name", "total_spend"],
      rows: [
        [109, "Acme Corp", "$18,450.00"],
        [42, "Nexus Media", "$8,420.00"],
        [254, "Hyperion Dynamics", "$5,890.50"],
        [311, "Global Logistics", "$0.00"]
      ]
    },
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
        explanation: "Unnoticed NULL propagation and unintentional duplicate rows created in joins cause silent errors."
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
        explanation: "Validating counts, edge cases, and sanity checks guarantees data integrity."
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
        explanation: "COALESCE returns the first non-NULL value among its evaluated arguments."
      }
    ]
  }
];

const achievements = [
  {
    id: "first-review",
    icon: "📖",
    title: "Warm-Up Win",
    description: "Review your first lesson notes.",
    isUnlocked: (state) => state.reviewedLessons.length >= 1
  },
  {
    id: "first-pass",
    icon: "⚡",
    title: "Quiz Crusher",
    description: "Pass your first checkpoint quiz.",
    isUnlocked: (state) => state.completedLessons.length >= 1
  },
  {
    id: "beginner-track",
    icon: "🌱",
    title: "Beginner Cleared",
    description: "Finish every Easy tier lesson.",
    isUnlocked: (state) => completeDifficulty(state, "Easy")
  },
  {
    id: "intermediate-track",
    icon: "🚀",
    title: "Intermediate Momentum",
    description: "Master all Intermediate lessons.",
    isUnlocked: (state) => completeDifficulty(state, "Intermediate")
  },
  {
    id: "advanced-track",
    icon: "👑",
    title: "Advanced Finisher",
    description: "Conquer the entire Advanced curriculum.",
    isUnlocked: (state) => completeDifficulty(state, "Advanced")
  },
  {
    id: "xp-master",
    icon: "💎",
    title: "XP Machine",
    description: "Accumulate 1,000+ total XP.",
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

let state = loadState();

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
  copySqlBtn: document.getElementById("copy-sql-btn"),
  runSqlBtn: document.getElementById("run-sql-btn"),
  sqlOutputContainer: document.getElementById("sql-output-container"),
  sqlOutputMeta: document.getElementById("sql-output-meta"),
  sqlOutputTable: document.getElementById("sql-output-table"),
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
    if (!saved) return { ...initialState };
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
  if (state.completedLessons.includes(lessonId)) return "Mastered";
  if (state.reviewedLessons.includes(lessonId)) return "In Progress";
  return "Not Started";
}

function completeDifficulty(currentState, difficulty) {
  const matching = lessons.filter((lesson) => lesson.difficulty === difficulty);
  return matching.length > 0 && matching.every((lesson) => currentState.completedLessons.includes(lesson.id));
}

function renderLessonGroups() {
  const difficulties = ["Easy", "Intermediate", "Advanced"];
  elements.lessonGroups.innerHTML = "";

  difficulties.forEach((difficulty) => {
    const group = document.createElement("section");
    group.className = "lesson-group";

    const title = document.createElement("div");
    title.className = "lesson-group-title";
    const total = lessons.filter((l) => l.difficulty === difficulty).length;
    const done = lessons.filter((l) => l.difficulty === difficulty && state.completedLessons.includes(l.id)).length;
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

        const statusText = getLessonStatus(lesson.id);
        const statusClass = statusText === "Mastered" ? "mastered" : (statusText === "In Progress" ? "in-progress" : "");

        button.innerHTML = `
          <div class="lesson-nav-title">
            <strong>${index + 1}. ${lesson.title}</strong>
            <span class="lesson-status-tag ${statusClass}">${statusText}</span>
          </div>
          <div class="lesson-nav-meta">
            <span>⏱️ ${lesson.duration}</span>
            <span>+${lesson.rewardXp} XP</span>
          </div>
        `;

        group.appendChild(button);
      });

    elements.lessonGroups.appendChild(group);
  });
}

function renderCurrentLesson() {
  const lesson = getCurrentLesson();
  const quizResult = state.quizResults[lesson.id];

  elements.lessonDifficulty.textContent = `${lesson.difficulty} Module`;
  elements.lessonTitle.textContent = lesson.title;

  const status = getLessonStatus(lesson.id);
  elements.lessonStatus.textContent = status;
  elements.lessonStatus.className = `status-chip ${status === "Mastered" ? "mastered" : (status === "In Progress" ? "in-progress" : "faint")}`;

  elements.lessonDuration.textContent = `⏱️ ${lesson.duration}`;
  elements.lessonReward.textContent = `✨ +${lesson.rewardXp} XP`;
  elements.lessonGoal.textContent = `📝 ${lesson.quiz.length} Questions`;
  elements.lessonSql.textContent = lesson.sql;

  // Reset Query Sandbox Output
  elements.sqlOutputContainer.classList.add("hidden");

  // Objectives
  elements.lessonObjectives.innerHTML = "";
  lesson.objectives.forEach((objective) => {
    const item = document.createElement("li");
    item.textContent = objective;
    elements.lessonObjectives.appendChild(item);
  });

  // Notes
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
        label.classList.add("selected");
      }

      input.addEventListener("change", () => {
        wrapper.querySelectorAll(".quiz-option").forEach((opt) => opt.classList.remove("selected"));
        if (input.checked) label.classList.add("selected");
      });

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
    elements.quizScorePill.textContent = `${percent}% Last Score`;
    elements.quizScorePill.classList.remove("faint");
    showQuizResult(previousResult, lesson);
  } else {
    elements.quizScorePill.textContent = "Ready";
    elements.quizScorePill.classList.add("faint");
    elements.quizResult.className = "quiz-result hidden";
    elements.quizResult.innerHTML = "";
  }
}

function runCurrentQuery() {
  const lesson = getCurrentLesson();
  if (!lesson.output) return;

  const startTime = (Math.random() * 8 + 3).toFixed(1);
  elements.sqlOutputMeta.textContent = `${lesson.output.rows.length} rows returned in ${startTime}ms`;

  let tableHtml = '<table class="query-table"><thead><tr>';
  lesson.output.columns.forEach((col) => {
    tableHtml += `<th>${col}</th>`;
  });
  tableHtml += "</tr></thead><tbody>";

  lesson.output.rows.forEach((row) => {
    tableHtml += "<tr>";
    row.forEach((cell) => {
      tableHtml += `<td>${cell}</td>`;
    });
    tableHtml += "</tr>";
  });
  tableHtml += "</tbody></table>";

  elements.sqlOutputTable.innerHTML = tableHtml;
  elements.sqlOutputContainer.classList.remove("hidden");
  showRewardToast("Query executed successfully against sample dataset.");
}

function copyCurrentSql() {
  const lesson = getCurrentLesson();
  navigator.clipboard.writeText(lesson.sql).then(() => {
    const copyBtnSpan = elements.copySqlBtn.querySelector("span");
    const originalText = copyBtnSpan.textContent;
    copyBtnSpan.textContent = "Copied!";
    setTimeout(() => {
      copyBtnSpan.textContent = originalText;
    }, 1800);
  });
}

function renderStats() {
  const progressPercent = getProgressPercent();
  elements.lessonsCompleteCopy.textContent = `${state.completedLessons.length}/${lessons.length} done`;
  elements.courseProgressCopy.textContent = `${progressPercent}%`;
  elements.courseProgressBar.style.width = `${progressPercent}%`;
  elements.playerLevel.textContent = String(state.level);
  elements.playerXp.textContent = String(state.xp);
  elements.playerStreak.textContent = `${state.streak} ${state.streak === 1 ? "day" : "days"}`;
  elements.playerBadges.textContent = String(state.badges.length);

  const nextLesson = getNextLesson();
  if (nextLesson) {
    elements.heroTitle.textContent = `Next Up: ${nextLesson.title}`;
    elements.heroDescription.textContent = `Earn +${nextLesson.rewardXp} XP and reinforce your momentum by conquering this checkpoint.`;
    elements.continueButton.textContent = "Continue Journey";
  } else {
    elements.heroTitle.textContent = "🎉 Quest Completed!";
    elements.heroDescription.textContent = "You've conquered every lesson from SQL basics to advanced indexing & query architecture.";
    elements.continueButton.textContent = "Review All Lessons";
  }
}

function renderAchievements() {
  unlockAchievements();
  elements.achievementList.innerHTML = "";

  achievements.forEach((achievement) => {
    const unlocked = state.badges.includes(achievement.id);
    const card = document.createElement("div");
    card.className = `achievement-card ${unlocked ? "unlocked" : ""}`;

    card.innerHTML = `
      <div class="achievement-icon">${achievement.icon || "🏆"}</div>
      <div>
        <strong>${achievement.title}</strong>
        <p class="muted">${achievement.description}</p>
      </div>
    `;

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
  if (state.lastActionDay === todayKey) return false;

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
    toastLines.push(`🎉 Level Up! You reached Level ${state.level}!`);
  }
  if (state.streak > 1) {
    toastLines.push(`🔥 Streak: ${state.streak} days!`);
  }

  showRewardToast(toastLines.join(" • "));
  emitSparks();
}

function unlockAchievements() {
  let changed = false;
  achievements.forEach((achievement) => {
    if (!state.badges.includes(achievement.id) && achievement.isUnlocked(state)) {
      state.badges.push(achievement.id);
      showRewardToast(`🏆 Badge Unlocked: ${achievement.title}`);
      emitSparks();
      changed = true;
    }
  });
  if (changed) saveState();
}

function showRewardToast(message) {
  elements.rewardToast.textContent = message;
  elements.rewardToast.className = "reward-toast show";
  clearTimeout(showRewardToast.timer);
  showRewardToast.timer = setTimeout(() => {
    elements.rewardToast.className = "reward-toast hidden";
  }, 2600);
}

function emitSparks() {
  elements.sparkLayer.innerHTML = "";
  const colors = ["#7c5cff", "#21d4c7", "#ffb648", "#36d98a", "#f0f5ff"];

  for (let i = 0; i < 28; i++) {
    const spark = document.createElement("span");
    spark.className = "spark";
    spark.style.left = `${50 + (Math.random() * 20 - 10)}%`;
    spark.style.top = `${55 + (Math.random() * 20 - 10)}%`;
    spark.style.background = colors[i % colors.length];
    spark.style.setProperty("--x", `${Math.random() * 260 - 130}px`);
    spark.style.setProperty("--y", `${Math.random() * -240 + 60}px`);
    spark.style.animationDelay = `${Math.random() * 100}ms`;
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
    rewardXp(40, `Lesson Notes Reviewed: ${lesson.title}`);
  } else {
    saveState();
    showRewardToast("Lesson already reviewed. Progress saved!");
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
    showRewardToast("⚠️ Please answer all questions before submitting.");
    return;
  }

  let score = 0;
  const details = lesson.quiz.map((question, index) => {
    const correct = answers[index] === question.answer;
    if (correct) score += 1;
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
    rewardXp(lesson.rewardXp, `Quiz Cleared: ${lesson.title}`);
  } else {
    saveState();
    showRewardToast(passed ? "Checkpoint completed! Score saved." : "Nice try! Review the notes and try again.");
  }

  render();
}

function showQuizResult(result, lesson) {
  const percent = Math.round((result.score / lesson.quiz.length) * 100);
  elements.quizResult.className = `quiz-result ${result.passed ? "success" : "retry"}`;

  let html = `
    <div class="result-header">
      <span>${result.passed ? "🎉 Checkpoint Cleared!" : "📚 Practice Needed"}</span>
      <strong>${result.score}/${lesson.quiz.length} (${percent}%)</strong>
    </div>
  `;

  result.details.forEach((detail, idx) => {
    html += `
      <div class="result-card ${detail.correct ? "is-correct" : "is-incorrect"}">
        <div class="result-header">
          <span>Question ${idx + 1}: ${detail.correct ? "✅ Correct" : "❌ Incorrect"}</span>
        </div>
        <div class="result-feedback">
          <p><strong>Your answer:</strong> ${detail.selectedOption}</p>
          ${!detail.correct ? `<p><strong>Correct answer:</strong> ${detail.correctOption}</p>` : ""}
          <p class="muted">${detail.explanation}</p>
        </div>
      </div>
    `;
  });

  elements.quizResult.innerHTML = html;
}

function getNextLesson() {
  return lessons.find((lesson) => !state.completedLessons.includes(lesson.id)) || null;
}

function continueLearning() {
  const nextLesson = getNextLesson() || lessons[0];
  state.currentLessonId = nextLesson.id;
  saveState();
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function resetProgress() {
  const confirmed = window.confirm("Reset all saved SQL Quest progress and streak?");
  if (!confirmed) return;

  state = { ...initialState };
  saveState();
  showRewardToast("Progress has been reset. Fresh start initiated!");
  render();
}

// Event Listeners
elements.quizForm.addEventListener("submit", submitQuiz);
elements.markReviewed.addEventListener("click", markLessonReviewed);
elements.continueButton.addEventListener("click", continueLearning);
elements.resetProgress.addEventListener("click", resetProgress);
elements.runSqlBtn.addEventListener("click", runCurrentQuery);
elements.copySqlBtn.addEventListener("click", copyCurrentSql);

// Initial Load
render();
