const path = require('path');
const fs = require('fs');
const url = require('url');
const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');

const app = express();
const port = 3000;

app.get('/notices', async (req, res) => {
  try {
    const response = await axios.get('https://www.syu.ac.kr/cse/community/notice/');//실제 화면에 적용 안됨
    const $ = cheerio.load(response.data);

    const notices = [];
    $('div.notice-list-item').each((index, element) => {
      const title = $(element).find('a.notice-title').text().trim();
      const content = $(element).find('div.notice-content').text().trim();
      const date = $(element).find('div.notice-date').text().trim();
      notices.push({ id: index + 1, title, content, date });
    });

    const page = parseInt(req.query.page) || 1;
    const itemsPerPage = 15; // 한 페이지에 표시할 공지사항 수
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedNotices = notices.slice(startIndex, endIndex);

    const totalPages = Math.ceil(notices.length / itemsPerPage);

    res.json({ notices: paginatedNotices, totalPages, currentPage: page });
  } catch (error) {
    console.error('Error fetching notices:', error);
    res.status(500).json({ error: 'Error fetching notices' });
  }
});

app.get('/notice/:id', async (req, res) => {
  try {
    const response = await axios.get('https://www.syu.ac.kr/cse/community/notice/');//x
    const $ = cheerio.load(response.data);

    const notice = $(`div.notice-list-item:nth-child(${req.params.id})`);
    const title = notice.find('a.notice-title').text().trim();
    const content = notice.find('div.notice-content').text().trim();
    const date = notice.find('div.notice-date').text().trim();

    res.json({ title, content, date });
  } catch (error) {
    console.error('Error fetching notice:', error);
    res.status(500).json({ error: 'Error fetching notice' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
