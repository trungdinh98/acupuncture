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
        disease_id: {
            type      : Sequelize.INTEGER, 
            allowNull : false,
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
