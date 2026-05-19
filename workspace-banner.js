module.exports = function(RED) {

    function WorkspaceBannerNode(config) {

        RED.nodes.createNode(this, config);

        const node = this;

        node.state = {

            text: config.text || "Banner",

            textColor: config.textColor || "#FFFFFF",

            backgroundColor: config.backgroundColor || "#222222",

            fontSize: Number(config.fontSize || 24),

            fontFamily: config.fontFamily || "Arial",

            showLed: config.showLed !== false,

            ledColor: config.ledColor || "#00FF00",

            ledSize: Number(config.ledSize || 16),

            x: Number(config.bannerX || 0),

            y: Number(config.bannerY || 0)
        };

        function publishState() {

            RED.comms.publish(
                "workspace-banner/update",
                {
                    id: node.id,
                    state: node.state
                },
                true
            );
        }

        node.on("input", function(msg, send, done) {

            const p = msg.payload || {};

            function pick(name) {

                if (msg[name] !== undefined) {
                    return msg[name];
                }

                if (p[name] !== undefined) {
                    return p[name];
                }

                return undefined;
            }

            const fields = [

                "text",
                "textColor",
                "backgroundColor",
                "fontSize",
                "fontFamily",
                "showLed",
                "ledColor",
                "ledSize",
                "x",
                "y"
            ];

            fields.forEach(field => {

                const v = pick(field);

                if (v !== undefined) {
                    node.state[field] = v;
                }
            });

            publishState();

            node.status({
                fill: "green",
                shape: "dot",
                text: node.state.text
            });

            send(msg);

            done();
        });

        node.on("close", function() {

            RED.comms.publish(
                "workspace-banner/remove",
                {
                    id: node.id
                },
                true
            );
        });

        publishState();
    }

    RED.nodes.registerType(
        "workspace-banner",
        WorkspaceBannerNode
    );
}