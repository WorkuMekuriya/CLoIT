<template>
  <div class="flex justify-around">
    <div>
      <div class="selected-service-header-text">Checkout</div>

      <!-- Products Section -->
      <div class="service-section">
        <div class="service-section-container" style="width: 794px">
          <div class="service-header">
            <div class="header-text">Products</div>
            <div class="header-text" style="display: flex">
              +$ {{ productTotal }}
              <div
                class="circle-button-icon"
                @click="collapsAccordion"
                style="margin-left: 12px"
              >
                <q-icon name="expand_more" size="xs" />
              </div>
            </div>
          </div>

          <!-- Manually define each product -->
          <LiItem
            label="Portal & Help Desk"
            price="$ {}"
            :showLeftButton="true"
            :showRightButton="false"
          />
          <LiItem
            label="Base"
            price="$ {}"
            :showLeftButton="false"
            :showRightButton="false"
          />
          <LiItem
            label="Option 적용"
            price="$ {}"
            :showLeftButton="false"
            :showRightButton="false"
          />
          <LiItem
            label="Discount"
            price="$ {}"
            :showLeftButton="false"
            :showRightButton="false"
          />
          <LiItem
            label="Accreditation"
            price="$ {}"
            :showLeftButton="true"
            :showRightButton="false"
          />
          <LiItem
            label="Base"
            price="$ {}"
            :showLeftButton="false"
            :showRightButton="false"
          />
          <LiItem
            label="Option 적용"
            price="$ {}"
            :showLeftButton="false"
            :showRightButton="false"
          />
          <LiItem
            label="Discount"
            price="$ {}"
            :showLeftButton="false"
            :showRightButton="false"
          />
          <LiItem
            label="Sports Entries"
            price="$ {}"
            :showLeftButton="true"
            :showRightButton="false"
          />
          <LiItem
            label="Base"
            price="$ {}"
            :showLeftButton="false"
            :showRightButton="false"
          />
          <LiItem
            label="Option 적용"
            price="$ {}"
            :showLeftButton="false"
            :showRightButton="false"
          />
          <LiItem
            label="Discount"
            price="$ {}"
            :showLeftButton="false"
            :showRightButton="false"
          />
        </div>
      </div>

      <!-- Options Section -->
      <div class="options-section">
        <div class="service-header">
          <div class="header-text">Options</div>
          <div class="header-text">+$ {{ optionsTotal }}</div>
        </div>

        <!-- Manually define each option -->
        <LiItem
          label="3 Months"
          price="+${}"
          :showLeftButton="true"
          :showRightButton="false"
        />
        <LiItem
          label="50 People"
          price="+${}"
          :showLeftButton="true"
          :showRightButton="false"
        />
        <LiItem
          label="3 Games"
          price="+${}"
          :showLeftButton="true"
          :showRightButton="false"
        />
      </div>

      <!-- Additional Discount Section -->
      <div class="options-section" style="margin-top: 16px">
        <div class="service-header">
          <div class="header-text">Additional Discount</div>
          <div class="header-text">+$ {{ optionsTotal }}</div>
        </div>
        <LiItem
          label="{}"
          price="+${}"
          :showLeftButton="true"
          :showRightButton="false"
        />
      </div>

      <!-- Total Section -->
      <div
        class="options-section"
        style="margin-top: 16px; margin-bottom: 60px"
      >
        <div class="total-section">
          <div class="total-text">Total</div>
          <div style="display: flex">
            <TagComponent
              type="TagGreen"
              label="USD/mo"
              :dot="false"
              size="sm"
            />
            <div class="total-text" style="margin-left: 16px">
              $ {{ total }}
            </div>
          </div>
        </div>
      </div>

      <!-- Rounded Button -->
      <RoundedButton
        type="Primary"
        label="이대로 신청"
        :buttonDisabled="false"
        size="xl"
        buttonWidth="228px"
        @click="navigateToPage('payment-full-done')"
      />
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
import LiItem from 'components/molecules/li-item/LiItem.vue'
import TagComponent from 'components/molecules/form-components/tag-component/TagComponent.vue'
import RoundedButton from 'components/molecules/buttons/conditionally-styled-buttons/ConditionalStyleRoundedButton.vue'

const navigateToPage = (routeName) => {
  router.push({ name: routeName })
}

// Define props
defineProps({
  headerText: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: 'Next : Option',
  },
  productTotal: {
    type: String,
    default: '{}',
  },
  optionsTotal: {
    type: String,
    default: '{}',
  },
  total: {
    type: String,
    default: '{}',
  },
})

const collapsAccordion = () => {
  isProductVisible = !isProductVisible
}
</script>

<style lang="scss" scoped>
@import 'AddService3.style.scss';
</style>
