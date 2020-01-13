module.exports = function(sequelize, Sequelize){
    return sequelize.define('acupuncture', {
        acupuncture_id: {
            type      : Sequelize.INTEGER, 
            allowNull : false,
            primaryKey: true,
            unique    : true,
            autoIncrement: true
        },
        acupuncture_type: {
            type     : Sequelize.STRING,
        },
        acupuncture_created_at: {
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
