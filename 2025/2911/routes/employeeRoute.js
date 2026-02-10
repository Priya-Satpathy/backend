const express = require('express');
const db = require('../config/db');
const { getAllEmployee } = require('../controllers/testController');
const router = express.Router();

router.get("/getall", getAllEmployee)

// 1 display employee details based on empno
router.get("/searchByEmpNo/:EN", async (req, res) => {
    try {

        const data = await db.query(`SELECT * FROM employee WHERE empno = ${req.params.EN}`);
        console.log(data)

        if (!data[0].length) {
            res.send({
                success: false,
                message: "No record found",
                errorCode: 500,
                data: data[0]
            });
        }

        res.send({
            success: true,
            message: "All record found",
            errorCode: 200,
            data: data[0]
        })





    } catch (error) {
        res.send({
            success: false,
            message: "No record found",
            errorCode: 404,
            error
        })

    }
    console.log("Priya");
})
// 2 display the maximum salary of emp table
router.get("/maxsal", async (req, res) => {
    try {

        const data = await db.query(`SELECT MAX(SAL) FROM employee`);
        console.log(data)

        if (!data[0].length) {
            res.send({
                success: false,
                message: "No record found",
                errorCode: 500,
                data: data[0]
            });
        }

        res.send({
            success: true,
            message: "All record found",
            errorCode: 200,
            data: data[0]
        })





    } catch (error) {
        res.send({
            success: false,
            message: "No record found",
            errorCode: 404,
            error
        })

    }
    console.log("Priya");
})
// 3 display the average salary of all employees
router.get("/avgsal", async (req, res) => {
    try {

        const data = await db.query(`SELECT AVG(SAL) FROM employee`);
        console.log(data)

        if (!data[0].length) {
            res.send({
                success: false,
                message: "No record found",
                errorCode: 500,
                data: data[0]
            });
        }

        res.send({
            success: true,
            message: "All record found",
            errorCode: 200,
            data: data[0]
        })





    } catch (error) {
        res.send({
            success: false,
            message: "No record found",
            errorCode: 404,
            error
        })

    }
    console.log("Priya");
})
// 4 display the minimum salary of from  all employees
router.get("/minsal", async (req, res) => {
    try {

        const data = await db.query(`SELECT MIN(SAL) FROM employee`);
        console.log(data)

        if (!data[0].length) {
            res.send({
                success: false,
                message: "No record found",
                errorCode: 500,
                data: data[0]
            });
        }

        res.send({
            success: true,
            message: "All record found",
            errorCode: 200,
            data: data[0]
        })





    } catch (error) {
        res.send({
            success: false,
            message: "No record found",
            errorCode: 404,
            error
        })

    }
    console.log("Priya");
})
// 5 display the sum of salaries of all employees
router.get("/sumsal", async (req, res) => {
    try {

        const data = await db.query(`SELECT SUM(SAL) FROM employee`);
        console.log(data)

        if (!data[0].length) {
            res.send({
                success: false,
                message: "No record found",
                errorCode: 500,
                data: data[0]
            });
        }

        res.send({
            success: true,
            message: "All record found",
            errorCode: 200,
            data: data[0]
        })





    } catch (error) {
        res.send({
            success: false,
            message: "No record found",
            errorCode: 404,
            error
        })

    }
    console.log("Priya");
})
// 6 display the no of employees earning a salary
router.get("/countsal", async (req, res) => {
    try {

        const data = await db.query(`SELECT COUNT(SAL) FROM employee`);
        console.log(data)

        if (!data[0].length) {
            res.send({
                success: false,
                message: "No record found",
                errorCode: 500,
                data: data[0]
            });
        }

        res.send({
            success: true,
            message: "All record found",
            errorCode: 200,
            data: data[0]
        })





    } catch (error) {
        res.send({
            success: false,
            message: "No record found",
            errorCode: 404,
            error
        })

    }
    console.log("Priya");
})
// 7 display the no of employees earning commision
router.get("/countcomm", async (req, res) => {
    try {

        const data = await db.query(`SELECT COUNT(COMM) FROM employee`);
        console.log(data)

        if (!data[0].length) {
            res.send({
                success: false,
                message: "No record found",
                errorCode: 500,
                data: data[0]
            });
        }

        res.send({
            success: true,
            message: "All record found",
            errorCode: 200,
            data: data[0]
        })





    } catch (error) {
        res.send({
            success: false,
            message: "No record found",
            errorCode: 404,
            error
        })

    }
    console.log("Priya");
})
// 8 display the no of employees working under a manager
router.get("/countmgr", async (req, res) => {
    try {

        const data = await db.query(`SELECT COUNT(MGR) FROM employee`);
        console.log(data)

        if (!data[0].length) {
            res.send({
                success: false,
                message: "No record found",
                errorCode: 500,
                data: data[0]
            });
        }

        res.send({
            success: true,
            message: "All record found",
            errorCode: 200,
            data: data[0]
        })





    } catch (error) {
        res.send({
            success: false,
            message: "No record found",
            errorCode: 404,
            error
        })

    }
    console.log("Priya");
})
// 9 display the details of employees in ascending order of their job
router.get("/searchJobAsc", async (req, res) => {
    try {

        const data = await db.query(`SELECT * FROM employee ORDER BY JOB ASC`);
        console.log(data)

        if (!data[0].length) {
            res.send({
                success: false,
                message: "No record found",
                errorCode: 500,
                data: data[0]
            });
        }

        res.send({
            success: true,
            message: "All record found",
            errorCode: 200,
            data: data[0]
        })





    } catch (error) {
        res.send({
            success: false,
            message: "No record found",
            errorCode: 404,
            error
        })

    }
    console.log("Priya");
})
// 10 display the details of employees in descending order of their job
router.get("/searchJobDesc", async (req, res) => {
    try {

        const data = await db.query(`SELECT * FROM employee ORDER BY JOB DESC`);
        console.log(data)

        if (!data[0].length) {
            res.send({
                success: false,
                message: "No record found",
                errorCode: 500,
                data: data[0]
            });
        }

        res.send({
            success: true,
            message: "All record found",
            errorCode: 200,
            data: data[0]
        })





    } catch (error) {
        res.send({
            success: false,
            message: "No record found",
            errorCode: 404,
            error
        })

    }
    console.log("Priya");
})
// 11 Display the details of employees whose job is 'SALESMAN' in descending order of their job
router.get("/JobAnalystDesc", async (req, res) => {
    try {

        const data = await db.query(`SELECT * FROM employee WHERE JOB = 'SALESMAN' ORDER BY JOB DESC`);
        console.log(data)

        if (!data[0].length) {
            res.send({
                success: false,
                message: "No record found",
                errorCode: 500,
                data: data[0]
            });
        }

        res.send({
            success: true,
            message: "All record found",
            errorCode: 200,
            data: data[0]
        })





    } catch (error) {
        res.send({
            success: false,
            message: "No record found",
            errorCode: 404,
            error
        })

    }
    console.log("Priya");
})
// 12 display the employees in alphabetical order of their job, alphabetical order of  deptno  and descending order of name 
router.get("/EmpAlphabeticalOrder", async (req, res) => {
    try {

        const data = await db.query(`SELECT * FROM employee  ORDER BY JOB ASC, Deptno DESC, ENAME DESC`);
        console.log(data)

        if (!data[0].length) {
            res.send({
                success: false,
                message: "No record found",
                errorCode: 500,
                data: data[0]
            });
        }

        res.send({
            success: true,
            message: "All record found",
            errorCode: 200,
            data: data[0]
        })





    } catch (error) {
        res.send({
            success: false,
            message: "No record found",
            errorCode: 404,
            error
        })

    }
    console.log("Priya");
})
// 13 display the employees whose salary is between 1500 and 4000
router.get("/InclusiveSal", async (req, res) => {
    try {

        const data = await db.query(`SELECT * FROM employee WHERE SAL>=1500 AND SAL<=4000`);
        console.log(data)

        if (!data[0].length) {
            res.send({
                success: false,
                message: "No record found",
                errorCode: 500,
                data: data[0]
            });
        }

        res.send({
            success: true,
            message: "All record found",
            errorCode: 200,
            data: data[0]
        })





    } catch (error) {
        res.send({
            success: false,
            message: "No record found",
            errorCode: 404,
            error
        })

    }
    console.log("Priya");
})
// 14 display the employees whose salary is greater than 1500 and less than 4000
router.get("/ExclusiveSal", async (req, res) => {
    try {

        const data = await db.query(`SELECT * FROM employee WHERE SAL>1500 AND SAL<4000`);
        console.log(data)

        if (!data[0].length) {
            res.send({
                success: false,
                message: "No record found",
                errorCode: 500,
                data: data[0]
            });
        }

        res.send({
            success: true,
            message: "All record found",
            errorCode: 200,
            data: data[0]
        })





    } catch (error) {
        res.send({
            success: false,
            message: "No record found",
            errorCode: 404,
            error
        })

    }
    console.log("Priya");
})

// 15 Show the employees who belong to deptno 20 and 30
router.get("/ShowAccDeptno", async (req, res) => {
    try {

        const data = await db.query(`SELECT * FROM employee WHERE DEPTNO = 20 OR DEPTNO = 30`);
        console.log(data)

        if (!data[0].length) {
            res.send({
                success: false,
                message: "No record found",
                errorCode: 500,
                data: data[0]
            });
        }

        res.send({
            success: true,
            message: "All record found",
            errorCode: 200,
            data: data[0]
        })





    } catch (error) {
        res.send({
            success: false,
            message: "No record found",
            errorCode: 404,
            error
        })

    }
    console.log("Priya");
})

//16 Employee detalis from emp table
router.get("/searchEmployeeDetails", async (req, res) => {
    try {

        const data = await db.query(`SELECT * FROM employee`);
        console.log(data)

        if (!data[0].length) {
            res.send({
                success: false,
                message: "No record found",
                errorCode: 500,
                data: data[0]
            });
        }

        res.send({
            success: true,
            message: "All record found",
            errorCode: 200,
            data: data[0]
        })





    } catch (error) {
        res.send({
            success: false,
            message: "No record found",
            errorCode: 404,
            error
        })

    }
    console.log("Priya");
})

//17 display employee names and their salaries
router.get("/employeeDetailsSalary", async (req, res) => {
    try {

        const data = await db.query(`SELECT ENAME, SAL FROM employee `);
        console.log(data)

        if (!data[0].length) {
            res.send({
                success: false,
                message: "No record found",
                errorCode: 500,
                data: data[0]
            });
        }

        res.send({
            success: true,
            message: "All record found",
            errorCode: 200,
            data: data[0]
        })





    } catch (error) {
        res.send({
            success: false,
            message: "No record found",
            errorCode: 404,
            error
        })

    }
    console.log("Priya");
})


// 18 Find all employees whose name starts with ‘S’
router.get("/empNameStartsS", async (req, res) => {
    try {
        const data = await db.query(`SELECT * FROM employee WHERE ename LIKE 'S%'`);
        console.log(data);

        if (!data[0].length) {
            res.send({
                success: false,
                message: "No record found",
                errorCode: 500,
                data: data[0]
            });
        }

        res.send({
            success: true,
            message: "All record found",
            errorCode: 200,
            data: data[0]
        });

    } catch (error) {
        res.send({
            success: false,
            message: "Error occurred",
            errorCode: 404,
            error
        });
    }
    console.log("Priya");
});


// 19 List employees whose name contains ‘A’ as the second character
router.get("/empNameSecondA", async (req, res) => {
    try {
        const data = await db.query(`SELECT * FROM employee WHERE ename LIKE '_A%'`);
        console.log(data);

        if (!data[0].length) {
            res.send({
                success: false,
                message: "No record found",
                errorCode: 500,
                data: data[0]
            });
        }

        res.send({
            success: true,
            message: "All record found",
            errorCode: 200,
            data: data[0]
        });

    } catch (error) {
        res.send({
            success: false,
            message: "Error occurred",
            errorCode: 404,
            error
        });
    }
    console.log("Priya");
});


// 20 Show employees who end with the letter ‘T’ in their name
router.get("/empNameEndsT", async (req, res) => {
    try {
        const data = await db.query(`SELECT * FROM employee WHERE ename LIKE '%T'`);
        console.log(data);

        if (!data[0].length) {
            res.send({
                success: false,
                message: "No record found",
                errorCode: 500,
                data: data[0]
            });
        }

        res.send({
            success: true,
            message: "All record found",
            errorCode: 200,
            data: data[0]
        });

    } catch (error) {
        res.send({
            success: false,
            message: "Error occurred",
            errorCode: 404,
            error
        });
    }
    console.log("Priya");
});


// 21 Display employees whose job title includes the substring ‘MAN’
router.get("/empJobIncludesMAN", async (req, res) => {
    try {
        const data = await db.query(`SELECT * FROM employee WHERE job LIKE '%MAN%'`);
        console.log(data);

        if (!data[0].length) {
            res.send({
                success: false,
                message: "No record found",
                errorCode: 500,
                data: data[0]
            });
        }

        res.send({
            success: true,
            message: "All record found",
            errorCode: 200,
            data: data[0]
        });

    } catch (error) {
        res.send({
            success: false,
            message: "Error occurred",
            errorCode: 404,
            error
        });
    }
    console.log("Priya");
});


// 22 Fetch all employees whose name has exactly 5 characters
router.get("/empNameFiveChars", async (req, res) => {
    try {
        const data = await db.query(`SELECT * FROM employee WHERE LENGTH(ename) = 5`);
        console.log(data);

        if (!data[0].length) {
            res.send({
                success: false,
                message: "No record found",
                errorCode: 500,
                data: data[0]
            });
        }

        res.send({
            success: true,
            message: "All record found",
            errorCode: 200,
            data: data[0]
        });

    } catch (error) {
        res.send({
            success: false,
            message: "Error occurred",
            errorCode: 404,
            error
        });
    }
    console.log("Priya");
});


// 23 Get employees whose name does not contain the letter ‘E’
router.get("/empNameNoE", async (req, res) => {
    try {
        const data = await db.query(`SELECT * FROM employee WHERE ename NOT LIKE '%E%'`);
        console.log(data);

        if (!data[0].length) {
            res.send({
                success: false,
                message: "No record found",
                errorCode: 500,
                data: data[0]
            });
        }

        res.send({
            success: true,
            message: "All record found",
            errorCode: 200,
            data: data[0]
        });

    } catch (error) {
        res.send({
            success: false,
            message: "Error occurred",
            errorCode: 404,
            error
        });
    }
    console.log("Priya");
});


// 24 Show employees whose name begins with ‘A’ or ‘M’
router.get("/empNameAorM", async (req, res) => {
    try {
        const data = await db.query(`SELECT * FROM employee WHERE ename LIKE 'A%' OR ename LIKE 'M%'`);
        console.log(data);

        if (!data[0].length) {
            res.send({
                success: false,
                message: "No record found",
                errorCode: 500,
                data: data[0]
            });
        }

        res.send({
            success: true,
            message: "All record found",
            errorCode: 200,
            data: data[0]
        });

    } catch (error) {
        res.send({
            success: false,
            message: "Error occurred",
            errorCode: 404,
            error
        });
    }
    console.log("Priya");
});

// 25 Find employees whose JOB ends with ‘RK’ or starts with ‘CL’
router.get("/empJobCLorRK", async (req, res) => {
    try {
        const data = await db.query(`SELECT * FROM employee WHERE job LIKE '%RK' OR job LIKE 'CL%'`);
        console.log(data);

        if (!data[0].length) {
            res.send({
                success: false,
                message: "No record found",
                errorCode: 500,
                data: data[0]
            });
        }

        res.send({
            success: true,
            message: "All record found",
            errorCode: 200,
            data: data[0]
        });

    } catch (error) {
        res.send({
            success: false,
            message: "Error occurred",
            errorCode: 404,
            error
        });
    }
    console.log("Priya");
});


// 26 List employees whose commission is NULL but name contains ‘O’
router.get("/empNameOCommNull", async (req, res) => {
    try {
        const data = await db.query(`SELECT * FROM employee WHERE comm IS NULL AND ename LIKE '%O%'`);
        console.log(data);

        if (!data[0].length) {
            res.send({
                success: false,
                message: "No record found",
                errorCode: 500,
                data: data[0]
            });
        }

        res.send({
            success: true,
            message: "All record found",
            errorCode: 200,
            data: data[0]
        });

    } catch (error) {
        res.send({
            success: false,
            message: "Error occurred",
            errorCode: 404,
            error
        });
    }
    console.log("Priya");
});

// 26 Display employees working in department located in ‘CHICAGO’
router.get("/empInChicagoDept", async (req, res) => {
    try {
        const data = await db.query(`SELECT * FROM employee WHERE deptno IN (SELECT deptno FROM dept WHERE loc='CHICAGO')`);
        console.log(data);

        if (!data[0].length) {
            res.send({
                success: false,
                message: "No record found",
                errorCode: 500,
                data: data[0]
            });
        }

        res.send({
            success: true,
            message: "All record found",
            errorCode: 200,
            data: data[0]
        });

    } catch (error) {
        res.send({
            success: false,
            message: "Error occurred",
            errorCode: 404,
            error
        });
    }
    console.log("Priya");
});


// 27 List employee name, salary, and grade
router.get("/empSalGrade", async (req, res) => {
    try {
        const data = await db.query(`SELECT ename, sal, (SELECT grade FROM salgrade WHERE sal BETWEEN losal AND hisal) AS grade FROM employee`);
        console.log(data);

        if (!data[0].length) {
            res.send({
                success: false,
                message: "No record found",
                errorCode: 500,
                data: data[0]
            });
        }

        res.send({
            success: true,
            message: "All record found",
            errorCode: 200,
            data: data[0]
        });

    } catch (error) {
        res.send({
            success: false,
            message: "Error occurred",
            errorCode: 404,
            error
        });
    }
    console.log("Priya");
});


// 28 Show all employees whose department name contains the letter ‘A’
router.get("/empDeptContainsA", async (req, res) => {
    try {
        const data = await db.query(`SELECT * FROM employee WHERE deptno IN (SELECT deptno FROM dept WHERE dname LIKE '%A%')`);
        console.log(data);

        if (!data[0].length) {
            res.send({
                success: false,
                message: "No record found",
                errorCode: 500,
                data: data[0]
            });
        }

        res.send({
            success: true,
            message: "All record found",
            errorCode: 200,
            data: data[0]
        });

    } catch (error) {
        res.send({
            success: false,
            message: "Error occurred",
            errorCode: 404,
            error
        });
    }
    console.log("Priya");
});


// 29 Find employees whose department location ends with ‘N’
router.get("/empDeptLocEndsN", async (req, res) => {
    try {
        const data = await db.query(`SELECT * FROM employee WHERE deptno IN (SELECT deptno FROM dept WHERE loc LIKE '%N')`);
        console.log(data);

        if (!data[0].length) {
            res.send({
                success: false,
                message: "No record found",
                errorCode: 500,
                data: data[0]
            });
        }

        res.send({
            success: true,
            message: "All record found",
            errorCode: 200,
            data: data[0]
        });

    } catch (error) {
        res.send({
            success: false,
            message: "Error occurred",
            errorCode: 404,
            error
        });
    }
    console.log("Priya");
});


// 30 Show EMPNO + ENAME + DEPTNO + DEPTNAME sorted by deptname
router.get("/empDeptSorted", async (req, res) => {
    try {
        const data = await db.query(`SELECT empno, ename, deptno, (SELECT dname FROM dept WHERE deptno=employee.deptno) AS deptname FROM employee ORDER BY deptname`);
        console.log(data);

        if (!data[0].length) {
            res.send({
                success: false,
                message: "No record found",
                errorCode: 500,
                data: data[0]
            });
        }

        res.send({
            success: true,
            message: "All record found",
            errorCode: 200,
            data: data[0]
        });

    } catch (error) {
        res.send({
            success: false,
            message: "Error occurred",
            errorCode: 404,
            error
        });
    }
    console.log("Priya");
});


// 31 Get employees whose salary range falls in Grade 3 or above
router.get("/empGrade3Above", async (req, res) => {
    try {
        const data = await db.query(`SELECT * FROM employee WHERE sal IN (SELECT sal FROM employee WHERE (SELECT grade FROM salgrade WHERE sal BETWEEN losal AND hisal) >= 3)`);
        console.log(data);

        if (!data[0].length) {
            res.send({
                success: false,
                message: "No record found",
                errorCode: 500,
                data: data[0]
            });
        }

        res.send({
            success: true,
            message: "All record found",
            errorCode: 200,
            data: data[0]
        });

    } catch (error) {
        res.send({
            success: false,
            message: "Error occurred",
            errorCode: 404,
            error
        });
    }
    console.log("Priya");
});


// 32 List employees along with salgrade whose job contains 'CL'
router.get("/empJobCLWithGrade", async (req, res) => {
    try {
        const data = await db.query(`SELECT ename, job, (SELECT grade FROM salgrade WHERE sal BETWEEN losal AND hisal) AS salgrade FROM employee WHERE job LIKE '%CL%'`);
        console.log(data);

        if (!data[0].length) {
            res.send({
                success: false,
                message: "No record found",
                errorCode: 500,
                data: data[0]
            });
        }

        res.send({
            success: true,
            message: "All record found",
            errorCode: 200,
            data: data[0]
        });

    } catch (error) {
        res.send({
            success: false,
            message: "Error occurred",
            errorCode: 404,
            error
        });
    }
    console.log("Priya");
});


// 33 Display all employees whose department name starts with ‘R’ or ends with ‘G’
router.get("/empDeptStartsREndsG", async (req, res) => {
    try {
        const data = await db.query(`SELECT * FROM employee WHERE deptno IN (SELECT deptno FROM dept WHERE dname LIKE 'R%' OR dname LIKE '%G')`);
        console.log(data);

        if (!data[0].length) {
            res.send({
                success: false,
                message: "No record found",
                errorCode: 500,
                data: data[0]
            });
        }

        res.send({
            success: true,
            message: "All record found",
            errorCode: 200,
            data: data[0]
        });

    } catch (error) {
        res.send({
            success: false,
            message: "Error occurred",
            errorCode: 404,
            error
        });
    }
    console.log("Priya");
});




module.exports = router