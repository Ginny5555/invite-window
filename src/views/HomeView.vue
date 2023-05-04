<template>
  <div class="wrapper">
    <div class="wrapper-header">
      <h1>Invite User</h1>
      <button>
        <img class="cross" src="../assets/cross.svg" alt="Vector Icon" />
      </button>
    </div>

    <InviteWindow />
  </div>
</template>

<script>
// @ is an alias to /src
import InviteWindow from "@/components/InviteWindow.vue";

export default {
  name: "HomeView",
  components: {
    InviteWindow,
  },
};
</script>
<style lang="scss" scoped>
@mixin flex-align {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.wrapper {
  width: 867px;
  background-color: rgba(255, 255, 255, 1);
  margin: 0 auto;
  border-radius: 16px;
  box-shadow: 0px 8px 16px rgba(54, 62, 113, 0.24);
  margin-top: 36px;
  &-header {
    @include flex-align;
    padding: 24px 24px 0 24px;
    & button {
      background: none;
      border: none;
    }
  }
}
h1 {
  text-align: left;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  margin: 0;
}
.cross {
  width: 26px;
  height: 26px;
  opacity: 50%;
}
</style>
