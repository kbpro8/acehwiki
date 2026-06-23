# @quartz-community/footer

Renders a footer with a "Created with Quartz" message and configurable links.

## Installation

```bash
npx quartz plugin add github:quartz-community/footer
```

## Usage

```yaml title="quartz.config.yaml"
plugins:
  - source: github:quartz-community/footer
    enabled: true
    options:
      links:
        GitHub: https://github.com/jackyzha0/quartz
        Discord Community: https://discord.gg/cRFFHYye7t
```

For advanced use cases, you can override in TypeScript:

```ts title="quartz.ts (override)"
import * as ExternalPlugin from "./.quartz/plugins";

ExternalPlugin.Footer({
  links: {
    GitHub: "https://github.com/jackyzha0/quartz",
    "Discord Community": "https://discord.gg/cRFFHYye7t",
  },
});
```

## Configuration

| Option  | Type                     | Default | Description                                                  |
| ------- | ------------------------ | ------- | ------------------------------------------------------------ |
| `links` | `Record<string, string>` | `{}`    | A map of link labels to their URLs to display in the footer. |

## Documentation

See the [Quartz documentation](https://quartz.jzhao.xyz/plugins/Footer) for more information.

## License

MIT
