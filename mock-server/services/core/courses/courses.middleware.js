const express = require('express');
const router = express.Router();
const url = require('url');

module.exports = (server) => {

	router.get('/courses', (req, res, next) => {
		let url_parts = url.parse(req.originalUrl, true),
			query = url_parts.query,
			from = query.start,
			to = +query.start + +query.count,
			sort = query.sort,
			queryStr = query.query,
			courses = server.db.getState().courses;
		console.log(sort);
		console.log(queryStr);
		if (courses.length < to) {
			to = courses.length;
		}
		courses.sort((a, b) => {
			return (new Date(b.date)).getTime() - (new Date(a.date)).getTime();
        });
		if (queryStr.length) {
		courses = courses.filter((object) => {
            return ~(object.name.toLowerCase().indexOf(queryStr));
        })
		}
		courses = courses.slice(from, to);		
		
		res.json(courses);
	});
	
	return router;
};
