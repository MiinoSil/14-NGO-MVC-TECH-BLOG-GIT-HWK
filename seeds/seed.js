const sequelize = require('../config/connection');
const { User, Blog, Posts } = require('../models');

const blogData = require('./blogData.json');
const postsData = require('./postsData.json');
const userData = require('./userData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    for (const blog of blogData) {
        await Blog.create({
            ...blog,
            user_id: users[Math.floor(Math.random() * users.length)].id,
        });
    }

    const posts = await Posts.bulkCreate(postsData, {
        returning: true,
    });

    process.exit(0);
};

seedDatabase();