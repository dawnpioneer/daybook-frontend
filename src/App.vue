<template>
  <div>
    <theme />
    <v-app id="toolbar">
      <!-- Toolbar_Start -->
      <v-navigation-drawer
        v-model="drawer"
        :clipped="$vuetify.breakpoint.lgAndUp"
        app
      >
        <v-list dense>
          <template v-for="item in items">
            <v-row
              v-if="item.heading"
              :key="item.heading"
              align="center"
            >
              <v-col cols="6">
                <v-subheader v-if="item.heading">
                  {{ item.heading }}
                </v-subheader>
              </v-col>
              <v-col
                cols="6"
                class="text-center"
              >
                <a
                  href="#!"
                  class="body-2 black--text"
                >EDIT</a>
              </v-col>
            </v-row>
            <v-list-item
              v-else
              :key="item.text"
              :to="item.href"
            >
              <v-list-item-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>
                  {{ item.text }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list>
      </v-navigation-drawer>

      <v-app-bar
        :clipped-left="$vuetify.breakpoint.lgAndUp"
        app
        color="blue darken-3"
        dark
      >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
        <v-toolbar-title
          style="width: 300px"
          class="ml-0 pl-4"
        >
          <span class="hidden-sm-and-down">Daybook</span>
        </v-toolbar-title>
        <v-text-field
          flat
          solo-inverted
          hide-details
          prepend-inner-icon="mdi-magnify"
          label="Search"
          class="hidden-sm-and-down"
        />
        <v-spacer />
        <v-btn icon>
          <v-icon>mdi-apps</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-bell</v-icon>
        </v-btn>
      </v-app-bar>
      <!-- Toolbar_End -->

      <!-- QuickCreate_Start -->
      <v-btn
        bottom
        color="blue"
        dark
        fab
        fixed
        right
        @click="dialog = !dialog"
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
      <v-dialog
        v-model="dialog"
        width="800px"
      >
        <v-card>
          <v-card-title class="grey darken-2">
            Create contact
          </v-card-title>
          <v-container>
            <v-row class="mx-2">
              <v-col
                class="align-center justify-space-between"
                cols="12"
              >
                <v-row
                  align="center"
                  class="mr-0"
                >
                  <v-avatar
                    size="40px"
                    class="mx-3"
                  >
                    <img
                      src="//ssl.gstatic.com/s2/oz/images/sge/grey_silhouette.png"
                      alt=""
                    >
                  </v-avatar>
                  <v-text-field
                    placeholder="Name"
                  />
                </v-row>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  prepend-icon="business"
                  placeholder="Company"
                />
              </v-col>
              <v-col cols="6">
                <v-text-field
                  placeholder="Job title"
                />
              </v-col>
              <v-col cols="12">
                <v-text-field
                  prepend-icon="mail"
                  placeholder="Email"
                />
              </v-col>
              <v-col cols="12">
                <v-text-field
                  type="tel"
                  prepend-icon="phone"
                  placeholder="(000) 000 - 0000"
                />
              </v-col>
              <v-col cols="12">
                <v-text-field
                  prepend-icon="notes"
                  placeholder="Notes"
                />
              </v-col>
            </v-row>
          </v-container>
          <v-card-actions>
            <v-btn
              text
              color="primary"
            >More</v-btn>
            <v-spacer />
            <v-btn
              text
              color="primary"
              @click="dialog = false"
            >Cancel</v-btn>
            <v-btn
              text
              @click="dialog = false"
            >Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <!-- QuickCreate_End -->

      <!-- Content_Start -->
      <main>
        <v-content>
          <router-view />
        </v-content>
      </main>
      <!-- Content_End -->
    </v-app>
  </div>
</template>

<script>
  import Theme from './components/_Theme'

  export default {
    name: 'app',
    components: {
      Theme
    },
    props: {
      source: String
    },
    data: () => ({
      dialog: false,
      drawer: null,
      items: [
        { icon: 'mdi-bullhorn-outline', text: '公告', href: '/news' },
        { icon: 'mdi-note-text-outline', text: '記帳本', href: '/daybooks' },
        { icon: 'mdi-book-multiple', text: '記帳類別', href: '/categories' },
        { icon: 'mdi-chart-bar', text: '統計圖', href: '/charts' },
        { icon: 'mdi-face', text: '個人檔案', href: '/profile' },
        { icon: 'mdi-logout', text: '登出', href: '/logout' }
      ]
    })
  }
</script>
