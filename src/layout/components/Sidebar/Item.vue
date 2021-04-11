<script>
import { h } from 'vue'

const Item = (props, context) => {
  const { icon, title } = props

  return [
    h(
      (icon && icon.includes('el-icon')) ? 'i' : 'svg-icon',
      {class: 'sub-el-icon'},
    ),
    h(
      title ? 'span' : '',
      {slot: 'title'},
      title
    )
  ]
}

Item.props = ['icon', 'title']

export default Item
</script>

<style scoped>
.sub-el-icon {
  color: currentColor;
  width: 1em;
  height: 1em;
}
</style>