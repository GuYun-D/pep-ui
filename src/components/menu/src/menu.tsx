import { defineComponent, PropType, useAttrs } from "vue";
import { toLine } from "../../../utils";
import { MenuItem } from "./types";

export default defineComponent({
  props: {
    data: {
      type: Array as PropType<MenuItem[]>,
      required: true,
    },
    defaultActive: {
      type: String,
      default: "",
    },
    router: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    let renderMenu = (data: MenuItem[]) => {
      return data.map((item: MenuItem) => {
        item.i = item.icon && `el-icon-${toLine(item.icon)}`;

        const slots = {
          title: () => {
            return (
              <>
                <item.i />
                <span>{item.name}</span>
              </>
            );
          },
        };

        if (item.children && item.children.length) {
          return (
            <el-sub-menu index={item.index} v-slots={slots}>
              {renderMenu(item.children)}
            </el-sub-menu>
          );
        }

        return (
          <el-menu-item index={item.index}>
            <item.i />
            <span>{item.name}</span>
          </el-menu-item>
        );
      });
    };

    const attrs = useAttrs();

    return () => {
      return (
        <el-menu
          default-active={props.defaultActive}
          router={props.router}
          {...attrs}
        >
          {renderMenu(props.data)}
        </el-menu>
      );
    };
  },
});