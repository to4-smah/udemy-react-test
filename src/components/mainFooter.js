import React from 'react';
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';


export const mainFooter = (
    <div class="mainFooter textCenter">
        <h4 class="">見積もりへのお問い合わせ</h4>
        <div class="toTel">
            <p>
                <h3 class="displayBlock"><PhoneIcon />&nbsp;0120-484-666</h3>
                <small class="displayBlock">受付時間：平日 9:00〜18:00</small>
            </p>
        </div>
        <div class="toMail">
            <p>
                <h3 class="displayBlock"><MailOutlineIcon />&nbsp;info@touryo.com</h3>
                <small class="displayBlock">件名に伝票番号を記入してください</small>
            </p>
        </div>
    </div>
);
