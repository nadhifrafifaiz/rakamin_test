module.exports = (sequelize, DataTypes) => {
    const Conversations = sequelize.define("Conversations", {
        idSender: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        idReciever: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    })

    Conversations.associate = (models) => {
        Conversations.hasMany(models.Messages, {
            onDelete: "cascade"
        })
    }

    return Conversations
}