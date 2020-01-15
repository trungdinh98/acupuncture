module.exports = function(sequelize, Sequelize){
    return sequelize.define('subdisease', {
        subdisease_id: {
            type      : Sequelize.INTEGER, 
            allowNull : false,
            primaryKey: true,
            unique    : true,
            autoIncrement: true
        },
        disease_id: {
            type      : Sequelize.INTEGER, 
            allowNull : false,
        },
        subdisease_name: {
            type      : Sequelize.STRING,
        },
        subdisease_created_at: {
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
