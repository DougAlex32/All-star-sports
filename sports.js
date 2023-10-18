const express = require('express');
const app = express();
const fs = require('fs');


app.get('/', (req, res) => {
    return res.json({ welcome: 'G.O.A.T All-Stars, all things sports' })
});

app.get('/baberuth', (req, res) => {
    return res.json({ Records: 'Single-season Homeruns: 60 || Total Homeruns: 714 || World Series: 7x' })
});
app.get('/pele', (req, res) => {
    return res.json({ Records: 'Goals: 1,281 || Ballon d`Or: 3x || World Cups: 3x ' })
});
app.get('/jordan', (req, res) => {
    return res.json({ Records: 'Points: 32,292 || MVP: 5x || NBA Championships: 6x' })
});
app.get('/tombrady', (req, res) => {
    return res.json({ Records: 'Passing Yards: 79,000+ || MVP: 3x || Super Bowls: 7x' })
});
app.get('/lebron', (req, res) => {
    return res.json({ Records: 'Points: 38,652 || MVP:4x || NBA Championships: 4x' })
});
app.get('/deionsanders', (req, res) => {
    return res.json({ Records: 'Passing Yards: 2,420 || MVP: 0 || Super Bowls: 2x' })
});


fs.readFile('baseball.txt', 'utf8', (error, data) => {
    if (error) {
        console.log('-----error-----', error);
    } else {
        console.log(data);
    }

});

app.get('/baseball', (req, res) => {
    let element = req.query.baberuth;
    fs.readFile(`${element}.txt`, 'utf8', (error, data) => {
        if (error) {
            return res.json({ message: 'There is an isssue try again later' })
        } else {
            return res.json({ message: data });
        }
    });
});

fs.readFile('soccer.txt', 'utf8', (error, data) => {
    if (error) {
        console.log('-----error-----', error);
    } else {
        console.log(data);
    }

});

app.get('/soccer', (req, res) => {
    let element = req.query.pele;
    fs.readFile(`${element}.txt`, 'utf8', (error, data) => {
        if (error) {
            return res.json({ message: 'There is an isssue try again later' })
        } else {
            return res.json({ message: data });
        }
    });
});

fs.readFile('basketball.txt', 'utf8', (error, data) => {
    if (error) {
        console.log('-----error-----', error);
    } else {
        console.log(data);
    }

});

app.get('/basketball', (req, res) => {
    let element = req.query.jordan;
    fs.readFile(`${element}.txt`, 'utf8', (error, data) => {
        if (error) {
            return res.json({ message: 'There is an isssue try again later' })
        } else {
            return res.json({ message: data });
        }
    });
});

fs.readFile('football.txt', 'utf8', (error, data) => {
    if (error) {
        console.log('-----error-----', error);
    } else {
        console.log(data);
    }

});

app.get('/football', (req, res) => {
    let element = req.query.tombrady;
    fs.readFile(`${element}.txt`, 'utf8', (error, data) => {
        if (error) {
            return res.json({ message: 'There is an isssue try again later' })
        } else {
            return res.json({ message: data });
        }
    });
});

fs.readFile('football2.txt', 'utf8', (error, data) => {
    if (error) {
        console.log('-----error-----', error);
    } else {
        console.log(data);
    }

});

app.get('/football2', (req, res) => {
    let element = req.query.deon;
    fs.readFile(`${element}.txt`, 'utf8', (error, data) => {
        if (error) {
            return res.json({ message: 'There is an isssue try again later' })
        } else {
            return res.json({ message: data });
        }
    });
});

fs.readFile('basketball2.txt', 'utf8', (error, data) => {
    if (error) {
        console.log('-----error-----', error);
    } else {
        console.log(data);
    }

});

app.get('/basketball2', (req, res) => {
    let element = req.query.lebron;
    fs.readFile(`${element}.txt`, 'utf8', (error, data) => {
        if (error) {
            return res.json({ message: 'There is an isssue try again later' })
        } else {
            return res.json({ message: data });
        }
    });
});


const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
    console.log('server is running on PORT', PORT);
})