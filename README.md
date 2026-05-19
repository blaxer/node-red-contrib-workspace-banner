# @blaxer/node-red-contrib-workspace-banner

A Node-RED editor workspace banner/status overlay node.

Displays customizable live banners directly on the Node-RED design surface.

## Features

- Live workspace banners
- Dynamic text updates
- Adjustable:
  - font
  - size
  - colors
  - LED indicators
- Draggable overlays
- Coordinate positioning
- Runtime updates via msg.payload

## Install

```bash
npm install @blaxer/node-red-contrib-workspace-banner
```

## Example

```json
{
  "payload": {
    "text": "SYSTEM ONLINE",
    "backgroundColor": "#004400",
    "textColor": "#ffffff",
    "fontSize": 28,
    "showLed": true,
    "ledColor": "#00ff00"
  }
}
```

## Message Properties

| Property | Description |
|---|---|
| text | Banner text |
| textColor | Text color |
| backgroundColor | Background color |
| fontSize | Font size |
| fontFamily | Font family |
| showLed | Show LED |
| ledColor | LED color |
| ledSize | LED size |
| x | X coordinate |
| y | Y coordinate |

## Screenshots

(Add screenshots here)

## License

MIT