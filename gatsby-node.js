const path = require('path');

exports.createPages = async(
    ({ graphql, actions, reporter }) => {
        const { createPage } = actions;

        const result = await graphql(
            `
            `
        );

        if (result.errors) {
            reporter.panicOnBuild(`Error while running GraphQL query.`);
            return;
        }

        const { edges } = result.data;

        edges.forEach(
            edge => {
                createPage({
                      path: `/${edge.node.slug}`
                    , component: path.resolve(`./src/pages/index.js`)
                    , context: {post: edge.node}
                });
            }
        );
});
