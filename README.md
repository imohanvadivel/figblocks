
# Figblocks

An Open-source UI component library for building Figma plugins with svelte.

![banner](https://figblocks.mohanvadivel.com/assets/banner.png)

## Installation

Install the `figblocks` in your project to get started.

```bash
npm i figblocks
```

If you don't have a developement setup, you can clone the template provide below.

```bash .sdfs
git clone https://github.com/imohanvadivel/figma-template-svelte.git
cd figma-template-svelte
npm i
```

The following scripts can be used to automate the building process.

```bash
#Monitors changes in the UI files and rebuilds them automatically when changes happen
watch:ui

#Compiles the UI files for production use
build:ui

#Monitors changes in the Figma code file and rebuilds it automatically when changes happen
watch:code

#Compiles the Figma code file forproduction use
build:code
```

## Import Global Styles

Import the global styles in your `main.ts` file and now you're all set to use the library.

```bash
import "figblocks/globalStyles";
```

## Usage

Import the required components from `figblocks` and start crafting your figma plugin.

```svelte example
<script>
	import { Button, Icon } from 'figblocks';
	import { IconArrowRight } from 'figblocks/icons';
</script>

<Button>
	Get Started <Icon slot="right-icon" iconSvg={IconArrowRight} />
</Button>
```

## Useful links

- [Plugin Documentation](https://www.figma.com/plugin-docs)
- [Figma Community Forum](https://forum.figma.com/)
- [Plugin and widget review guidelines](https://help.figma.com/hc/en-us/articles/360039958914-Plugin-and-widget-review-guidelines)
- [Figma brand guidelines](https://www.figma.com/using-the-figma-brand/)
