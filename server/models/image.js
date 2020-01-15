module.exports = function(sequelize, Sequelize){
    return sequelize.define('image', {
        image_id: {
            type      : Sequelize.INTEGER, 
            allowNull : false,
            primaryKey: true,
            unique    : true,
            autoIncrement: true
        },
        image_path: {
            type     : Sequelize.STRING,
        },
        subdisease_id: {
            type      : Sequelize.INTEGER, 
            allowNull : false,
        },
        time: {
            type     : Sequelize.STRING,
        },
        date: {
            type     : Sequelize.STRING,
        },
        image_created_at: {
            type        : Sequelize.DATE,
            allowNull   : false,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
        }
    },
    {
        charset: 'utf8',
        collate: 'utf8_unicode_ci',
        timestamps: false
    });
}
