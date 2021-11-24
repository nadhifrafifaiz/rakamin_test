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

    return Conversations
}