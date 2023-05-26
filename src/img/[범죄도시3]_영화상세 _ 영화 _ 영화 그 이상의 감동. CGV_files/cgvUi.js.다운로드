jQuery(function($){
    $('[data-type="cgvTab"]').on({
        click:function(e){
            var target = e.target;
            var currentTarget = e.currentTarget;
            var targetTagName = target.tagName;
            var activeIdx = $(target).parent('li').index();

            if(targetTagName == 'A'){
                e.preventDefault();
                $(target).parent('li').addClass('active').siblings('li').removeClass('active');
                $(currentTarget).siblings('[data-type="cgvTabContent"]').children('li').eq(activeIdx).addClass('active').siblings('li').removeClass('active');
            }
        }
    });
});