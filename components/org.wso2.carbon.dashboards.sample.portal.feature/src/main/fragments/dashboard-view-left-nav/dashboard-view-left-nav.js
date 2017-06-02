/**
 * Copyright (c) 2016, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function onGet(env) {
    var dashboard = JSON.parse(env.params.dashboard);
    var pages = [];
    for (var key in dashboard.pages) {
        if (dashboard.pages.hasOwnProperty(key)) {
            pages.push({
                id: key,
                name: dashboard.pages[key].name
            });
        }
    }
    return {
        dashboard: {
            name: dashboard.name,
            id: dashboard.id,
            hasPages: (pages.length > 0)
        },
        pages: pages
    };
}