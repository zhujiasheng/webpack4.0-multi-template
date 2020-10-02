/**
 * 1 定义reducer
 * 2 创建共享context
 * 3 ui抽离
 */
import { GloProvider } from "./context";
import { ButtonAdd, ShowArea, ButtonDece } from "./ui";

function Hook() {
  return (
    <GloProvider>
      <ButtonAdd />
      <ShowArea />
      <ButtonDece />
    </GloProvider>
  );
}

export default Hook;
