import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.kursovaya-rabota.caption'),
          title: i18n.t('forms.application.sitemap.kursovaya-rabota.title'),
          children: [{
            link: 'i-i-s-kursovaya-rabota-фотокиоск-l',
            caption: i18n.t('forms.application.sitemap.kursovaya-rabota.i-i-s-kursovaya-rabota-фотокиоск-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya-rabota.i-i-s-kursovaya-rabota-фотокиоск-l.title'),
            children: null
          }, {
            link: 'i-i-s-kursovaya-rabota-оплата-l',
            caption: i18n.t('forms.application.sitemap.kursovaya-rabota.i-i-s-kursovaya-rabota-оплата-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya-rabota.i-i-s-kursovaya-rabota-оплата-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-kursovaya-rabota-проверка-киоска-l',
            caption: i18n.t('forms.application.sitemap.kursovaya-rabota.i-i-s-kursovaya-rabota-проверка-киоска-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya-rabota.i-i-s-kursovaya-rabota-проверка-киоска-l.title'),
            icon: 'book',
            children: null
          }, {
            link: 'i-i-s-kursovaya-rabota-оператор-l',
            caption: i18n.t('forms.application.sitemap.kursovaya-rabota.i-i-s-kursovaya-rabota-оператор-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya-rabota.i-i-s-kursovaya-rabota-оператор-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-kursovaya-rabota-печать-фото-l',
            caption: i18n.t('forms.application.sitemap.kursovaya-rabota.i-i-s-kursovaya-rabota-печать-фото-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya-rabota.i-i-s-kursovaya-rabota-печать-фото-l.title'),
            icon: 'edit',
            children: null
          }, {
            link: 'i-i-s-kursovaya-rabota-клиент-l',
            caption: i18n.t('forms.application.sitemap.kursovaya-rabota.i-i-s-kursovaya-rabota-клиент-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya-rabota.i-i-s-kursovaya-rabota-клиент-l.title'),
            icon: 'archive',
            children: null
          }]
        }
      ]
    };
  }),
})