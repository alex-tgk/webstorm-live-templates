import { $TM_FILENAME$, $TM_FILENAME$Props } from './$TM_FILENAME_NOCAPS$'

export default {
    argTypes: {
        className: {
            control: {
                disable: true,
            },
        },
    },
    component: $TM_FILENAME$,
    parameters: {
        // @ts-ignore
        propTypes: [$TM_FILENAME$.__docgenInfo],
    },
    title: '$STORY_NAME$',
};

export const Basic = ({ ...args }: $TM_FILENAME$Props) => (
    <$TM_FILENAME$ {...args} />
);

Basic.args = { }

