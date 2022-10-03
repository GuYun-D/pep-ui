import { defineComponent, PropType, useAttrs } from "vue";
import * as Icons from "@element-plus/icons";
import "./styles/index.scss";

export default defineComponent({
  props: {
    data: {
      type: Array as PropType<any[]>,
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
    name: {
      type: String,
      default: "name",
    },

    index: {
      type: String,
      default: "index",
    },
    icon: {
      type: String,
      default: "icon",
    },
    children: {
      type: String,
      default: "children",
    },
  },
  setup(props) {
    let renderMenu = (data: any[]) => {
      return data.map((item: any) => {
        item.i = item[props.icon] && (Icons as any)[item[props.icon]];

        const slots = {
          title: () => {
            return (
              <>
                <item.i />
                <span>{item[props.name]}</span>
              </>
            );
          },
        };

        if (item[props.children] && item[props.children].length) {
          return (
            <el-sub-menu index={item[props.index]} v-slots={slots}>
              {renderMenu(item[props.children])}
            </el-sub-menu>
          );
        }

        return (
          <el-menu-item index={item[props.index]}>
            <item.i />
            <span>{item[props.name]}</span>
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
