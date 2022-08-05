export const up = async (knex) => {
    return knex.schema.createTable('users', (t) => {
        t.increments('id');
        t.string('username');
        t.string('email');
    });
};

export const down = async (knex) => {
    return knex.schema.dropTable('users');
};
