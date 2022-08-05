/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

export const seed = async (knex) => {
    return knex('users')
        .del()
        .then(() => {
            return knex('users').insert([
                {
                    id: 1,
                    username: 'Roman',
                    email: 'roman@gmail.com',
                },
                {
                    id: 2,
                    username: 'Ivan',
                    email: 'ivan@gmail.com',
                },
                {
                    id: 3,
                    username: 'Alex',
                    email: 'alex@gmail.com',
                },
            ]);
        });
};
