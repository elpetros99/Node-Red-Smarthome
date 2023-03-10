const { Kafka } = require("kafkajs");
const { partitionsPerDevice } = require("../../data/devices-partitions");

const kafka = new Kafka({
    clientId: "nodered-events-producer",
    brokers: ["localhost:9092"],
});

const producer = kafka.producer();

const produceToTopic = async ({ events, event_date }, topic) => {
    try {
        let splicedEvent;
        await producer.connect();
        for (let event in events) {
            console.log(event)
            if (event === "alarm" || event === "Etot" || event == "Wtot") splicedEvent = event;
            else splicedEvent = event.slice(0, event.length - 1);
            const value = {
                data: events[event],
                date: event_date,
            };
	   console.log("value1 :", value, splicedEvent, partitionsPerDevice[splicedEvent] )
            await producer.send({
                topic: topic,
                messages: [{ key: event, value: JSON.stringify(value), partition: partitionsPerDevice[splicedEvent] }],
            });
        }
        return "OK";
    } catch (err) {
        return "NOT OK";
    }
};

module.exports = { produceToTopic };
