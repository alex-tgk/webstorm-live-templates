

# Webstorm Live Templates

Holding repo for live templates I use with JetBrains's Webstorm.


__storybook/ts-story.tsx__

Suggested abbreviation: 
`tsb`

Typescript template for a new Storybook story.

| Variable | Expression | Default Value | Skip if Defined |
|---|---|:---:|:---:|
| STORY_NAME | | "Components/" |  |
| TM_FILENAME | capitalize(camelCase(substringBefore(fileName(),"."))) | "" | X |
| TM_FILENAME_NOCAPS | camelCase(substringBefore(fileName(),".")) | "" | X |

