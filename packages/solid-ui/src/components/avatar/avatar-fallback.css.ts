import { type RecipeVariants, recipe } from '@vanilla-extract/recipes'
import openProps from 'open-props'

const variants = recipe({
  base: {
    display: 'flex',
    borderRadius: '100%',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: openProps.gray3
  },
  variants: {},
  defaultVariants: {}
})

type Variants = RecipeVariants<typeof variants>

export { variants, type Variants }
